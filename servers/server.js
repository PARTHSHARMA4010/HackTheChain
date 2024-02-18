const express = require("express");
const app = express();
const authRouter = require("./router/auth-router");
const connectdb = require("./utils/db");
const errorMiddleware = require("./middleware/err_middleware");
const Crouter = require("./router/contact_router");
const cors = require("cors");
const Contact = require("./models/contact");
// const Log = require("./models/loginschema");
const User = require("./models/userschema")

// const corsOptions = {
//     origin:"http://localhost:5173",
//     methods : "GET , POST , PUT ,DELETE ,PATCH ,HEAD",
//     credentials : true,
// };
// Middle ware
app.use(cors()); // to handle cors error
app.use(express.json());
app.use("/api", Crouter);
app.use("/api/auth", authRouter);

// checking errror before connecting  


// app.get("/",(req,res) =>{
// res.status(200).send('Welcome to my page');
// })
// app.get("/register",(req,res) =>{
//     res.redirect("https://parthsharma4010.github.io/Snake-Game/");

//wjc3jJxOYiam4TGP
//     })
app.use(errorMiddleware);
app.use(express.static('public'));

const port = 5000;

app.use(cors());

// Connect to MongoDB Atlas
// mongoose.connect('mongodb+srv://Vaibhav:KeoS07ZMt8vWz482@cluster0.ezmqnxi.mongodb.net/HackTheChain?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Failed to connect to MongoDB', err));

// Define a schema for your data
// const itemSchema = new mongoose.Schema({
//   maggi: Number,
//   alooParatha: Number,
//   chowmien: Number,
//   coffee: Number,
//   cone: Number,
//   creamBar: Number,
//   tea: Number,
//   vegRoll: Number,
//   user: String
// });

// Define a model based on the schema
// const Order = mongoose.model('Order', Contact);

// Route to fetch data

app.get('/api/hero', async (req, res) => {
  try {
    // Fetch items from the database
    const man = await User.find().sort({ _id: -1 }).limit(1);
    ;
    res.json(man);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/api/orders', async (req, res) => {
  try {
    // Fetch items from the database
    const items = await Contact.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});





connectdb().then(() => {
  app.listen(port, () => {
    console.log("server is running");
  })
});
// Brouwser router have multiple routers in it;
