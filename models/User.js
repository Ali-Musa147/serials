const mongoose = require('mongoose');

//Schema constructor function gets an configurations object
const SerialSchema = new mongoose.Schema({
  serial: { type: String, required: true, unique: true },
  date: { type:String }
});

module.exports = mongoose.model('serial', SerialSchema)//returns model that create serial documents, a punch of documents of the same type are collection 



//documents are stored as objects in mongodb



