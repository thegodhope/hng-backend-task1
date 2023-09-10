const express = require("express");
const app = express();
const PORT = 5000;

// default get request
app.get("/", (req, res) => {
  res.json({
    message: "My stage one task",
  });
});

// info get request
app.get("/api", (req, res) => {
  // get query params
  const { slack_name, track } = req.query;

  // check for query parameters
  if (!slack_name || !track) {
    return res.status(400).json({
      error: "Please provide query parameters",
    });
  }

  // response information
  const current_day = new Date().toLocaleString("en-US", { weekday: "long" });
  const utc_time = new Date().toISOString().slice(0, 19) + "Z";
  const githubFileUrl =
    "https://github.com/thegodhope/hng-backend-task1.git/index.js";
  const githubRepoUrl = "https://github.com/thegodhope/hng-backend-task1.git";

  // send response as json
  res.status(200).json({
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
