import { createSystemMessage, createUserMessage } from "@/prompt/generate/task";
import Groq from "groq-sdk";

const createGroqClient = (apiKey?: any) => {
  const key = apiKey || process.env.NEXT_PUBLIC_GROQ_API_KEY;
  if (!key) {
    throw new Error("Groq API Key is required");
  }
  return new Groq({ apiKey: key });
};

// Core Function
const generateTask = async (params: any = {}, apiKey?: any) => {
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
          name: "task_generation",
          schema: {
            type: "object",
            properties: {
              job_position: { type: "string" },
              job_departmen: { type: "string" },
              job_description: { type: "string" },
              start_date: { type: "string" },
              due_date: { type: "string" },
              current_date: { type: "string" },
              scorecard_objective: {
                type: "object",
                properties: {
                  kpi: { type: "string" },
                  objective: { type: "string" },
                  kra: { type: "string" },
                  target: { type: "string" },
                  polarity: { type: "string" },
                  risk_profile: { type: "string" },
                  bobot: { type: "string" }
                },
                required: ["kpi", "objective", "kra", "target", "polarity", "risk_profile", "bobot"],
                additionalProperties: false
              },
              suggested_initiative: {
                type: "array",
                items: {
                  type: "array",
                  properties: {
                    number: { type: "number" },
                    target_value: { type: "string" },
                    notes: { type: "string" },
                    priority_value: { type: "string" },
                    start_date: { type: "string" },
                    due_date: { type: "string" }
                  },
                  required: ["target_value", "notes", "priority_value", "start_date", "due_date"],
                  additionalProperties: false
                }
              },
              suggested_competency: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    competency: { type: "string" },
                    description: { type: "string" }
                  },
                  required: ["competency", "description"],
                  additionalProperties: false
                }
              }
            },
            required: ["job_position", "job_departmen", "job_description", "start_date", "due_date", "current_date", "scorecard_objective", "suggested_initiative", "suggested_competency"],
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
    console.error("Error generating Task:", error);
    return null;
  }
};

export { generateTask };
