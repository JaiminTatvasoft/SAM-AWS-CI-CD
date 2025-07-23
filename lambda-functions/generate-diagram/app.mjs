import axios from "axios";

export const generateDiagramHandler = async (event) => {
  let prompt = JSON.parse(event.body).prompt;
  console.log("Prompt received:", prompt);

  const GEMINI_API_KEY = "AIzaSyCpufyUUpFtn1OjQNEtfvPHJCWqizTuEWE";
  const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCpufyUUpFtn1OjQNEtfvPHJCWqizTuEWE`;
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
  };

  const resp = await axios.post(GEMINI_ENDPOINT, payload, {
    headers: { "Content-Type": "application/json" },
    timeout: 10000,
  });

  const jsonResponse = resp.data.candidates[0].content.parts[0].text;

  console.log("Gemini response status:", jsonResponse);

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
