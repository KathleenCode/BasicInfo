const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "kathleenbonaventure@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/KathleenCode/BasicInfo"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
