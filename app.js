const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



app.use('/api/check', (req, res) => {
  res.send("Welcome to the Signing Solution API- Backend Server Running v0.01");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    console.log("CONGRATULATIONS!!!");
});

if(process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}
