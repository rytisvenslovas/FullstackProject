const  express = require('express');
const  cors = require('cors');
const mongoose = require('mongoose');
const newQueriesRouter = require('./controlers/newQueriesRouter');
const databaseRouter = require('./controlers/databaseRouter');
const getThumbnail = require('./controlers/getThumbnail');


const MONGODB_URI = ""
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

const app = express();

app.use(cors());
// app.use(express.static('build')); // build <<----
app.use(express.json());

app.use('/api/new-queries', newQueriesRouter)
app.use('/api/database', databaseRouter)
app.use('/api/get-thumbnail', getThumbnail)


const port = process.env.PORT || 3001 ;

app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
  });