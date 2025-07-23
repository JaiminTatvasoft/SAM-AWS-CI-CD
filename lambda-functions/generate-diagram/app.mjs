import axios from "axios";

export const generateDiagramHandler = async (event) => {
  let prompt = JSON.parse(event.body).prompt;
  //   let prompt = event.prompt || "Generate a diagram based on the provided data.";
  console.log("Prompt received:", prompt);

  const GEMINI_API_KEY = "AIzaSyA-iKZ8zrrWzZCnIupptSK1Oy6U2L5cYmo";
  const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
  const payload = {
    contents: [{ parts: [{ text: "Hello, can you generate diagram?" }] }],
  };

  const resp = await axios.post(GEMINI_ENDPOINT, payload, {
    headers: { "Content-Type": "application/json" },
    timeout: 10000,
  });

  console.log("Gemini response status:", resp);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Diagram generated successfully!",
    }),
  };

  return response;
};
