const express = require("express");
const app = express();
const { spawn } = require("child_process");

app.get("/", (req, res) => {
  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn("python", ["script1.py"]);
  python.stdin.write("ye mne bheja hai");
  python.stdin.end();
  // collect data from script
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend);
  });
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
