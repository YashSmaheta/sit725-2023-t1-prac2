const express = require('express');
const app = express();
app.get('/', (req,res)=>{
    res.send('Hi there my name is yash here is my node app');
});

app.get('/add/:no1/:no2', (req,res)=>{
    const no1=parseFloat(req.params.no1);
    const no2=parseFloat(req.params.no2);
    const result = no1 + no2;
    res.send(`Addition of number ${no1} + ${no2} is ${result}`);
});

app.get('/multiply/:no1/:no2', (req,res)=>{
    const no1=parseFloat(req.params.no1);
    const no2= parseFloat(req.params.no2);
    const result = no1 * no2;
    res.send(`Multiplication of number ${no1} * ${no2} is ${result}`);

});

const port= process.env.port|| 3000;
app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
});