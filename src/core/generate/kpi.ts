import { createSystemMessage, createUserMessage } from "@/prompt/generate/kpi";
import Groq from "groq-sdk";

const createGroqClient = (apiKey?: any) => {
  const key = apiKey || process.env.NEXT_PUBLIC_GROQ_API_KEY;
  if (!key) {
    throw new Error("Groq API Key is required");
  }
  return new Groq({ apiKey: key });
};

// Core Function
const generateKpi = async (params: any = {}, apiKey?: any) => {
  const config = {
    model: params?.config?.model || "meta-llama/llama-4-maverick-17b-128e-instruct",     // Default
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
          name: "kpi_generation",
          schema: {
            type: "object",
            properties: {
              category_id: { type: "string" },
              position_id: { type: "string" },
              kpi_focus: { type: "string" },
              job_position: { type: "string" },
              job_description: { type: "string" },
              category_name: { type: "string" },
              suggested: {
                type: "array",
                properties: {
                  number: { type: "number" },
                  focus: { type: "string" },
                  kpi: { type: "string" },
                  description: { type: "string" },
                  target: { type: "string" },
                  level_of_importance: { type: "string" },
                  dimensions: { type: "string" },
                  example: { type: "string" }
                },
                required: ["kpi", "description", "target", "level_of_importance"],
                additionalProperties: false
              }
            },
            required: ["category_id", "position_id", "kpi_focus", "job_position", "job_description", "category_name", "suggested"],
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
  console.error("Error generating KPI:", error);
  return null;
}
};

export { generateKpi };
