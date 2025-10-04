// server.js
import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch"; // or native fetch in newer Node
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json());

/**
 * POST /api/chat
 * body: { message: string, sessionId?: string }
 * returns: { reply: string }
 *
 * This endpoint forwards the message to the LLM and returns the reply.
 * Implement rate limits / auth / logging as needed.
 */
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).send("missing message");

  try {
    // Build a system prompt engineered for medical safety.
    const systemPrompt = `
You are Seva, an AI healthcare assistant. Give clear, concise, evidence-based informational answers.
Always include:
 - A brief answer to the user's question.
 - If the user describes severe symptoms (chest pain, difficulty breathing, severe bleeding, loss of consciousness, sudden weakness/numbness, severe head injury, severe allergic reaction, signs of stroke), respond with: "This may be an emergency — seek immediate medical attention or call emergency services." and suggest seeing a professional.
 - Do NOT provide prescriptions or dosages. Encourage seeing a doctor for diagnosis and treatment decisions.
Be empathetic and do not claim to be a physician.
`;

    // Example using OpenAI ChatCompletions (update if using different provider)
    const payload = {
      model: "gpt-4o-mini", // replace with available model you have access to
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      max_tokens: 800,
      temperature: 0.2,
    };

    const openaiResp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!openaiResp.ok) {
      const errText = await openaiResp.text();
      console.error("OpenAI error", errText);
      return res.status(500).send("LLM error");
    }

    const openaiData = await openaiResp.json();
    const reply = openaiData.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";

    return res.json({ reply });
  } catch (err) {
    console.error(err);
    return res.status(500).send("server error");
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
