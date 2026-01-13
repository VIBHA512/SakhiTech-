const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
  const message = req.body.message.toLowerCase();

  let reply = "I am here to support you. You are not alone.";

  if (message.includes("unsafe") || message.includes("scared")) {
    reply = "I’m here to help you. Please stay calm and reach out to a trusted person nearby.";
  }
  else if (message.includes("follow")) {
    reply = "If someone is following you, move to a crowded place and call emergency services immediately.";
  }
  else if (message.includes("help")) {
    reply = "Help is available. You can use the SOS button or contact emergency helplines below.";
  }

  res.json({ reply });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
