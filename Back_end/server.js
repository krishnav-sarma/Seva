import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config(); // Load .env

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ reply: "Message cannot be empty" });
    }

    // Use gemini-1.5-flash model with correct prompt structure
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent({
      prompt: { text: message } // ✅ must be object, not array
    });

    // Extract the reply text
    const reply = result.output_text || "Sorry, no reply returned";

    res.json({ reply });
  } catch (err) {
    console.error("Gemini API error:", err);
    res.status(500).json({ reply: "Error processing message" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
