const express = require('express');
const app = express()
app.get('/',(req,res)=>{
    res.send('Hello node,how are yoy');
})
app.listen(3000,()=>{
    console.log("Node api is working");
})