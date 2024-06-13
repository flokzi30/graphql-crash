require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const authenticate = require('./middlewares/authenticate'); // Assuming the middleware is saved here
const schema = require('./schema/schema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Firma = require('./models/Firma');

const app = express();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

mongoose.connect('mongodb://127.0.0.1:27017/graphql', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Login route
app.use('/login', express.json(), async (req, res) => {
  const { FirmaEPosta, FirmaSifre } = req.body;
  const firma = await Firma.findOne({ FirmaEPosta });
  if (!firma) {
    return res.status(400).send('Firma not found');
  }

  const valid = await bcrypt.compare(FirmaSifre, firma.FirmaSifre);
  if (!valid) {
    return res.status(400).send('Invalid password');
  }

  const token = jwt.sign({ id: firma.id, FirmaEPosta: firma.FirmaEPosta }, JWT_SECRET, {
    expiresIn: '1d' // Token expires in 1 day
  });

  res.send({ token });
});

app.use('/api/akillisalon', graphqlHTTP((req) => ({
  schema: schema,
  graphiql: process.env.NODE_ENV === 'development',
})));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// Path: server/middlewares/authenticate.js
// app.use('/graphql', authenticate, graphqlHTTP((req) => ({
//   schema: schema,
//   graphiql: process.env.NODE_ENV === 'development',
//   context: { user: req.user }
// })));