import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

async function test() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent({ prompt: { text: "Hello!" } });
    console.log("Gemini result:", result);
  } catch (e) {
    console.error("Test error:", e);
  }
}

test();
