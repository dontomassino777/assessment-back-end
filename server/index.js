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
  const ballAnswers = ["It is certain", "Most definitely", "Yes", "Signs point to Yes", "Hmm... let me think about it", "You really don't want to know the answer to that", "Concentrate and ask again", "Hell no", "I wouldn't coun't on it", "Negative, ghost-rider",];
  
  let randomIndex = Math.floor(Math.random() * ballAnswers.length);
  let randomAnswer = ballAnswers[randomIndex];

  res.status(200).send(randomAnswer);

});

app.get("/api/horoscope", (req, res) => {
  const horoscopeAnswers = ["Spread your wings and take flight, Pisces! Exploration is the name of the game starting today, as the only Scorpio new moon of 2021 supercharges your worldly ninth house. Over the next six months, expanding your worldview will lead to profound satisfaction. This is not the time to play it safe. Boldly venture into new territory, whether you jet-set to an awe-inspiring locale, launch your passion project, or start learning a new skill set for an entirely different career! For now, don’t worry about the nitty-gritty details. Focus on big-picture manifesting instead. Once you’ve got the broad strokes, then you can dive into the details."];
  res.status(200).send(horoscopeAnswers);
})

app.listen(4000, () => console.log("Server running on 4000"));
