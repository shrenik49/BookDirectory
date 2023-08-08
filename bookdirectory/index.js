require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')

const MONGOOSE_URL = process.env.MONGOOSE_URL
const port = process.env.PORT || 3000

app.use(cors());
// Middleware
app.use(bodyParser.json());

//Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Book Directory API');
});

const bookRoutes = require('./routes/bookRoutes');
app.use('/api', bookRoutes);

// Start the server
mongoose.connect(MONGOOSE_URL)
.then(()=>{
    console.log("connected with the database")
    app.listen(port,()=>{
        console.log("node server is running on",port)
    })
}).catch((err)=>{
    console.log("error while connection",err)
})
