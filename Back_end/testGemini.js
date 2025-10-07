import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent({
      prompt: [
        {
          content: [
            { type: "text", text: "Hello Seva!" }
          ]
        }
      ]
    });

    console.log("Raw Gemini response:", JSON.stringify(result, null, 2));

    const reply =
      result?.response?.[0]?.output?.[0]?.content?.[0]?.text ||
      "No text returned";

    console.log("Reply:", reply);
  } catch (err) {
    console.error("Gemini error:", err);
  }
}

run();
