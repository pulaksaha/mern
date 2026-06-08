const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/local').then(() => console.log('DB Connected'));

const User = mongoose.model('users', new mongoose.Schema({
  uname: String,
  pass: String
}));

const app = express();
app.use(cors(), express.json());

app.post('/demo', async (req, res) => {
  const user = await User.findOne(req.body);
  res.json(user ? 'Login Successful' : 'Invalid Username or Password');
});

app.listen(8080, () => console.log('Server Started'));