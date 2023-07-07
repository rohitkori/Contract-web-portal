const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const generateContract = require("./generate_contract.js");

app.post("/employee", async (req, res) => {
  console.log(req.body);
  const designation = req.body.designation;
  const typeOfPosition = req.body.typeOfPosition;
  const organization = req.body.organization;
  let contract = await generateContract.fetchEmployeeContract(
    designation,
    typeOfPosition,
    organization
  );
  console.log(contract);
  res.send(contract);
});

app.listen(5000, () => {
  console.log("app listening on port 5000");
});
