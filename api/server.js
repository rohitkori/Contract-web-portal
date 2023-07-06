const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const generateContract = require("./generate_contract.js");

app.get("/", async (req, res) => {
  let contract = await generateContract.fetchEmployeeContract();
  console.log(contract);
  res.send(contract);
});

app.listen(5000, () => {
  console.log("app listening on port 5000");
});
