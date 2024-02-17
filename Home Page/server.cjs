const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Vaibhav:KeoS07ZMt8vWz482@cluster0.ezmqnxi.mongodb.net/HackTheChain?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Define a schema for your data
const itemSchema = new mongoose.Schema({
  maggi: Number,
  alooParatha: Number,
  chowmien: Number,
  coffee: Number,
  cone: Number,
  creamBar: Number,
  tea: Number,
  vegRoll: Number,
  user: String
});

// Define a model based on the schema
const Order = mongoose.model('Order', itemSchema);

// Route to fetch data
app.get('/items', async (req, res) => {
  try {
    // Fetch items from the database
    const items = await Order.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
