const express = require('express');
const app = express();
const port = 3000;
const {tenis} = require('../data/tenis');

app.listen(port,()=>{
    console.log('Servidor tenis running');
});

app.get('/tenis', (req,res)=>{
    res.json(tenis);
})