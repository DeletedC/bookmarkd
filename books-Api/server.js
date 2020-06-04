const express = require ('express')
const app = express()
// const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001
// const booksController = require('./controllers/books.js');
// const db = mongoose.connection
// const MONGODB_URI =process.env.MONGODB_URL || 'mongodb://localhost:27017/books';
 
//db connection
// mongoose.connect(MONGODB_URI, {
//    useNewUrlParser: true,
//     useUnifiedTopology: true });
// db.on('open', () => {
//    console.log('connected to mongoose...');
// });
//middelwear
// app.use(express.json())
// app.use('/books/', booksController);

 
app.listen (PORT , ()=>{
   console.log(`listening on port ${PORT}`)
})
