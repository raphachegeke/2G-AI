const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/ussd", (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  let response = "";

  if (text === "") {
    response = `CON Welcome to AI Helper
1. Crop Advice
2. Weather Tips
3. Exit`;
  } else if (text === "1") {
    response = `END For crop issues, rotate crops and use neem oil.`;
  } else if (text === "2") {
    response = `END Today: Light showers expected. Ideal for planting beans.`;
  } else {
    response = `END Invalid choice.`;
  }

  res.set("Content-Type: text/plain");
  res.send(response);
});

app.listen(3000, () => {
  console.log("USSD app running on port 3000");
});
