const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const authRouter = require('./Routes/AuthRouter.js')

require('dotenv').config();
const dbConnection = require('./db/dbConnection.js')
const PORT = process.env.PORT || 8080;  

app.get('/ping',(req, res)=>{
    res.send("PONG");
})

app.use(bodyParser.json());
app.use(cors());
app.use('/api/auth', authRouter)

dbConnection().then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log('Database connection error', err);
});

app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}`);
})