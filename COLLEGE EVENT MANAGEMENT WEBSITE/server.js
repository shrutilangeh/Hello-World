const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));


app.post("/register", (req, res) => {
  const { name, email, event } = req.body;

  if (!name || !email || !event) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newRegistration = {
    name,
    email,
    event,
    date: new Date().toLocaleString()
  };

  let data = [];

  if (fs.existsSync("registrations.json")) {
    data = JSON.parse(fs.readFileSync("registrations.json"));
  }

  data.push(newRegistration);
  fs.writeFileSync("registrations.json", JSON.stringify(data, null, 2));

  res.json({ message: "Registration successful!" });
});


app.get("/registrations", (req, res) => {
  if (!fs.existsSync("registrations.json")) {
    return res.json([]);
  }

  const data = JSON.parse(fs.readFileSync("registrations.json"));
  res.json(data);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 
