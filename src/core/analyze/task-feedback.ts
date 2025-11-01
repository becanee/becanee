import { createSystemMessage, createUserMessage } from "@/prompt/analyze/task-feedback";
import Groq from "groq-sdk";

const createGroqClient = (apiKey?: any) => {
  const key = apiKey || process.env.NEXT_PUBLIC_GROQ_API_KEY;
  if (!key) {
    throw new Error("Groq API Key is required");
  }
  return new Groq({ apiKey: key });
};

// Core Function
const analyzeTaskFeedback = async (params: any = {}, apiKey?: any) => {
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
          name: "feedback_analysis",
          schema: {
            type: "object",
            properties: {
              comments: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: { type: "number" },
                    employee_name: { type: "string" },
                    avatar: { type: "string" },
                    role: { type: "string" },
                    comment: { type: "string" }
                  },
                  required: ["id", "employee_name", "avatar", "role", "comment"],
                  additionalProperties: false
                }
              },
              analysis_result: {
                type: "object",
                properties: {
                  overall_sentiment: { type: "string" },
                  confidence_score: { type: "number" },
                  overall_sentiment_reason: { type: "string" },
                  impact_measurement: { type: "string" },
                  reply_pattern: { type: "string" },
                  sentiment_distribution: {
                    type: "object",
                    properties: {
                      positive: { type: "number" },
                      neutral: { type: "number" },
                      negative: { type: "number" }
                    },
                    required: ["positive", "neutral", "negative"],
                    additionalProperties: false
                  },
                  entities: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: { type: "number" },
                        employee_name: { type: "string" },
                        avatar: { type: "string" },
                        role: { type: "string" },
                        comment: { type: "string" },
                        sentiment: { type: "string" },
                        confidence_score: { type: "number" },
                        key_themes: {
                          type: "array",
                          items: { type: "string" }
                        },
                        impact_score: { type: "number" }
                      },
                      required: ["id", "employee_name", "avatar", "role", "comment", "sentiment", "confidence_score", "key_themes", "impact_score"],
                      additionalProperties: false
                    }
                  },
                  recommendations: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        category: { type: "string" },
                        suggestion: { type: "string" },
                        priority: { type: "string" }
                      },
                      required: ["category", "suggestion", "priority"],
                      additionalProperties: false
                    }
                  }
                },
                required: ["overall_sentiment", "confidence_score", "overall_sentiment_reason", "impact_measurement", "reply_pattern", "sentiment_distribution", "entities", "recommendations"],
                additionalProperties: false
              }
            },
            required: ["comments", "analysis_result"],
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
    console.error("Error analyzing Task Feedback:", error);
    return null;
  }
};

export { analyzeTaskFeedback };
