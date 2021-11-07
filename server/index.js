const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Believe it can be done.", 
    "The sure way to predict the future is to invent it.",
    "Pick battles big enough to matter, small enough to win.",
    "Love truth, but pardon error.",
    "What does that say about yourself, the fact that you're asking an internet button for your fortune?",
  ];
  
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/eightball", (req, res) => {
  const ballAnswers = ["It is certain", "Most definitely", "Yes", "Signs point to Yes", "Hmm... let me think about it", "You really don't want to know the answer to that", "Concentrate and ask again", "Hell yeah!", "Ask me again later", "Negative, ghost-rider",];
  
  let randomIndex = Math.floor(Math.random() * ballAnswers.length);
  let randomAnswer = ballAnswers[randomIndex];

  res.status(200).send(randomAnswer);

});

const {getGoals, createGoals, deleteGoals} = require("./controller.js");

app.get("/api/goals", getGoals);
app.post("/api/goals", createGoals);
app.delete("/api/goals/:id", deleteGoals);

app.listen(4000, () => console.log("Server running on 4000"));
