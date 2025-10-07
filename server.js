// server.js
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Optional CORS support (for React frontend)
import cors from "cors";
app.use(cors());

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).send("missing message");

  try {
    const systemPrompt = `
You are Seva, an AI healthcare assistant. Respond only to health-related questions.
Always:
 - Give concise, evidence-based general advice.
 - If the user describes severe symptoms (like chest pain, breathing trouble, unconsciousness, heavy bleeding, etc.),
   say: "This may be an emergency — please seek immediate medical attention or call your local emergency services."
 - Never give prescriptions, dosages, or claim to diagnose.
 - Be empathetic and encourage seeing a doctor if unsure.
`;

    const payload = {
      contents: [
        {
          role: "user",
          parts: [
            { text: `${systemPrompt}\nUser: ${message}` },
          ],
        },
      ],
    };

    const geminiResp = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
        process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!geminiResp.ok) {
      const errText = await geminiResp.text();
      console.error("Gemini error:", errText);
      return res.status(500).send("Gemini API error");
    }

    const data = await geminiResp.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn’t generate a response.";

    return res.json({ reply });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).send("server error");
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Seva Server running on port ${PORT}`));
