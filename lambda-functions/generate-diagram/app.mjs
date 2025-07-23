import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export const generateDiagramHandler = async (event) => {
  //   let prompt = JSON.parse(event.body).prompt;
  let prompt = event.prompt || "Generate a diagram based on the provided data.";
  console.log("Prompt received:", prompt);

  //   const llm = new ChatGoogleGenerativeAI({
  //     model: "gemini-2.0-flash",
  //     temperature: 1,
  //     apiKey: "AIzaSyA-iKZ8zrrWzZCnIupptSK1Oy6U2L5cYmo",
  //   });

  //   const response = await llm.invoke(prompt);
  //   console.log("LLM response:", response.content);

  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({
  //       message: "Diagram Generated!",
  //       //   promptResponse: response.content,
  //     }),
  //   };
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "User processed!" }),
  };
};
