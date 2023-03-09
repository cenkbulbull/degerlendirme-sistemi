const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')


const site = require('./routes/site');



const app = express()
app.use(cors())

// db connection
const db = require('./helper/db.js')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/site",site)

/*const port = 3000
app.listen(port, () => {
  console.log("Example app listening on port")
})*/




// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: { message: err.message, code: err.code } });
});

module.exports = app;