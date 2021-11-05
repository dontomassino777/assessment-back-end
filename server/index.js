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

app.listen(4000, () => console.log("Server running on 4000"));
