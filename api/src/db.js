require('dotenv').config();
const mongoose = require('mongoose');
const { DB_HOST, DB_NAME } = process.env;

mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));