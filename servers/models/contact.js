const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    Username : {
        type : String , required : true
    },
    AlooParatha : {
        type : Number , required : true
    },
    Maggi : {
        type : Number , required : true
    },
    Chowmine : {
        type : Number , required : true
    },
    
    Vegroll : {
        type : Number , required : true
    },
    Tea : {
        type : Number , required : true
    },
    Coffee : {
        type : Number , required : true
    },
    Cone : {
        type : Number , required : true
    },
    icecreambar : {
        type : Number , required : true
    },

});
const Contact = new mongoose.model("Contact",contactSchema);
module.exports = Contact;