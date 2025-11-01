import { createSystemMessage, createUserMessage } from "@/prompt/generate/objective";
import Groq from "groq-sdk";

const createGroqClient = (apiKey?: any) => {
  const key = apiKey || process.env.NEXT_PUBLIC_GROQ_API_KEY;
  if (!key) {
    throw new Error("Groq API Key is required");
  }
  return new Groq({ apiKey: key });
};

// Core Function
const generateObjective = async (params: any = {}, apiKey?: any) => {
  const config = {
    model: params?.config?.model || "meta-llama/llama-4-maverick-17b-128e-instruct",
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
          name: "objective_generation",
          schema: {
            type: "object",
            properties: {
              job_position: { type: "string" },
              job_description: { type: "string" },
              existing_kpi: {
                type: "array",
                items: { type: "string" }
              },
              scorecard_fields: {
                type: "array",
                items: { type: "string" }
              },
              suggested_scorecard: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    number: { type: "number" },
                    kpi_name: { type: "string" },
                    bobot_poin: { type: "string" },
                    objectives_goals: { type: "string" },
                    kra: { type: "string" },
                    target: { type: "string" },
                    polarity: { type: "string" },
                    risk_profile: { type: "string" }
                  },
                  required: ["kpi_name", "bobot_poin", "objectives_goals", "kra", "target", "polarity", "risk_profile"],
                  additionalProperties: false
                }
              }
            },
            required: ["job_position", "job_description", "existing_kpi", "scorecard_fields", "suggested_scorecard"],
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
    console.error("Error generating Objective:", error);
    return null;
  }
};

export { generateObjective };
