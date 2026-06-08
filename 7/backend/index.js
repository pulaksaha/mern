const express = require('express'),
      cors = require('cors'),
      mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/local')
  .then(() => console.log('DB Connected'));

app.use(cors());
app.use(express.json());

const User = mongoose.model('Student', {
  usn: String,
  name: String,
  sem: Number,
  year: Number
});

app.post('/demo', async (req, res) =>
  res.json(await User.create(req.body))
);

app.get('/data', async (req, res) =>
  res.json(await User.find())
);

app.listen(8080, () => console.log('Server Started'));