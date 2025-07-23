import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export const generateDiagramHandler = async (event) => {
  let prompt = JSON.parse(event.body).prompt;
  console.log("Prompt received:", prompt);

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    console.error("Missing GEMINI_API_KEY!");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server misconfiguration" }),
    };
  }

  const llm = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash",
    temperature: 1,
    apiKey: GEMINI_API_KEY,
  });

  const result = await llm.invoke(prompt);
  const jsonResponse = result.content;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Diagram generated successfully!",
      diagram: jsonResponse,
      prompt: prompt,
    }),
  };

  return response;
};
