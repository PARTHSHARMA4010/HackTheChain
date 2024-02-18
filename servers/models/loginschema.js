const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username : {
        type : String , required : true
    },
  
   });
const Log = new mongoose.model("Log",loginSchema);
module.exports = Log;