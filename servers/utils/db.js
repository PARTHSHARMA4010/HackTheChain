const mongoose = require("mongoose");



const connectdb = async () =>{
    try {
        await mongoose.connect("mongodb+srv://Gourang:wjc3jJxOYiam4TGP@cluster0.ezmqnxi.mongodb.net/Gourang?retryWrites=true&w=majority")
        console.log("DB Connected .. ")
    } catch (err) {
    console.log(err);
    }
}
module.exports = connectdb;