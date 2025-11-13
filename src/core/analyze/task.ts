import { createSystemMessage, createUserMessage } from "@/prompt/analyze/task";
import Groq from "groq-sdk";

const createGroqClient = (apiKey?: any) => {
  const key = apiKey || process.env.NEXT_PUBLIC_GROQ_API_KEY;
  if (!key) {
    throw new Error("Groq API Key is required");
  }
  return new Groq({ apiKey: key });
};

// Core Function
const analyzeTask = async (params: any = {}, apiKey?: any) => {
  const config = {
    model: params?.config?.model || "meta-llama/llama-4-maverick-17b-128e-instruct",   // Default
    temperature: params?.config?.temperature || 1,
    maxTokens: params?.config?.maxTokens || 1024,
    topP: params?.config?.topP || 1
  };

  try {
    const groq: any = createGroqClient(apiKey);

    const chatCompletion = await groq.chat.completions.create({
      messages: [createSystemMessage(params), createUserMessage(params)],
      model: config.model,
      response_format: {
      type: "json_schema",
      json_schema: {
        name: "task_analysis",
        schema: {
        type: "object",
        properties: {
          employee_info: {
          type: "object",
          properties: {
            job_title: { type: "string" },
            performance_objective: { type: "string" }
          },
          required: ["job_title", "performance_objective"],
          additionalProperties: false
          },
          overall_assessment: {
          type: "object",
          properties: {
            alignment_score: { type: "number", minimum: 1, maximum: 10 },
            feasibility_score: { type: "number", minimum: 1, maximum: 10 },
            completeness_score: { type: "number", minimum: 1, maximum: 10 },
            overall_rating: { type: "string", enum: ["Excellent", "Good", "Fair", "Poor"] },
            summary: { type: "string" }
          },
          required: ["alignment_score", "feasibility_score", "completeness_score", "overall_rating", "summary"],
          additionalProperties: false
          },
          initiative_analysis: {
          type: "object",
          properties: {
            initiative: { type: "string" },
            strengths: {
            type: "array",
            items: { type: "string" }
            },
            weaknesses: {
            type: "array",
            items: { type: "string" }
            },
            alignment_score: { type: "number", minimum: 1, maximum: 10 },
            feasibility_score: { type: "number", minimum: 1, maximum: 10 },
            impact_potential: { type: "string", enum: ["High", "Medium", "Low"] },
            specificity_level: { type: "string", enum: ["High", "Medium", "Low"] },
            recommended_action: { type: "string", enum: ["Keep as-is", "Modify", "Replace", "Add details"] },
            improvement_suggestions: { type: "string" }
          },
          required: [
            "initiative",
            "strengths",
            "weaknesses",
            "alignment_score",
            "feasibility_score",
            "impact_potential",
            "specificity_level",
            "recommended_action",
            "improvement_suggestions"
          ],
          additionalProperties: false
          },
          gap_analysis: {
          type: "object",
          properties: {
            missing_areas: {
            type: "array",
            items: { type: "string" }
            },
            redundant_initiatives: {
            type: "array",
            items: { type: "string" }
            },
            suggested_additions: {
            type: "array",
            items: {
              type: "object",
              properties: {
              initiative: { type: "string" },
              rationale: { type: "string" },
              priority: { type: "string", enum: ["High", "Medium", "Low"] }
              },
              required: ["initiative", "rationale", "priority"],
              additionalProperties: false
            }
            }
          },
          required: ["missing_areas", "redundant_initiatives", "suggested_additions"],
          additionalProperties: false
          },
          recommendations: {
          type: "object",
          properties: {
            prioritization: {
            type: "array",
            items: { type: "string" }
            },
            timeline_suggestions: { type: "string" },
            resource_considerations: { type: "string" },
            success_metrics: {
            type: "array",
            items: { type: "string" }
            },
            risk_mitigation: {
            type: "array",
            items: { type: "string" }
            }
          },
          required: [
            "prioritization",
            "timeline_suggestions",
            "resource_considerations",
            "success_metrics",
            "risk_mitigation"
          ],
          additionalProperties: false
          },
          language: { type: "string" }
        },
        required: [
          "employee_info",
          "overall_assessment",
          "initiative_analysis",
          "gap_analysis",
          "recommendations",
          "language"
        ],
        additionalProperties: false
        }
      }
      },
      temperature: config.temperature,
      max_tokens: config.maxTokens,
      top_p: config.topP,
      stop: null,
      stream: false,
    });

    const content = chatCompletion.choices[0]?.message?.content;
    return content
      ? {
        ...JSON.parse(content),
        prompt: {
          system: createSystemMessage(params).content,
          user: createUserMessage(params).content,
        },
      }
      : null;
  } catch (error) {
    console.error("Error analyzing Task:", error);
    return null;
  }
};

export { analyzeTask };
