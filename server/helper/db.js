const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb+srv://cenkbulbull:Cenk.1967@cluster0.jt6sgpp.mongodb.net/?retryWrites=true&w=majority');

  mongoose.connection.on('open', () => {
    console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });

  mongoose.Promise = global.Promise;

};