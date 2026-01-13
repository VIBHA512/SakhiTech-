import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "PASTE_YOUR_GEMINI_API_KEY_HERE";

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are a women safety assistant. Give calm and helpful advice.
User message: ${userMessage}`
              }
            ]
          }
        ]
      })
    }
  );

  const data = await response.json();
  const reply = data.candidates[0].content.parts[0].text;

  res.json({ reply });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
