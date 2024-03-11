
require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/graphql', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});