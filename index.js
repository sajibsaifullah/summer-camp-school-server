const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res)=>{
    res.send("Summer Camp School is running...")
})
app.get('/test', (req, res)=>{
    res.send("Summer Camp School is running on test")
})

app.listen(port, ()=>{
    console.log(`Summer camp school is running on port: ${port}`)
})