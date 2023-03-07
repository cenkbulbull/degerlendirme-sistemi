const express = require('express')
const bodyParser = require('body-parser');

const site = require('./routes/site');



const app = express()


// db connection
const db = require('./helper/db.js')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/site",site)

/*const port = 3000
app.listen(port, () => {
  console.log("Example app listening on port")
})*/

module.exports = app;