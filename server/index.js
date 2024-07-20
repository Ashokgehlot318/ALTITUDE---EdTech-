const express = require('express');
// const pool = require('./config/database');
const app = express();

// dot env
require('dotenv').config();
const PORT = process.env.PORT || 3000;


// middleware
app.use(express.json());

// all routes connection
const testRoutes = require("./routes/testRoute");
app.use('/api/v1',testRoutes);

//db connection with sequelize
const {dbConnect, sequelize} = require('./config/database');
dbConnect();

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})