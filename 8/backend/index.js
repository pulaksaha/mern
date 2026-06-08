const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/local').then(() => console.log('DB Connected'));

const User = mongoose.model('fruits', new mongoose.Schema({
  fname: String,
  price: Number
}));

app.post('/demo', async (req, res) => res.json(await new User(req.body).save()));
app.get('/data', async (req, res) => res.json(await User.find()));

app.listen(8080, () => console.log('Server Started'));