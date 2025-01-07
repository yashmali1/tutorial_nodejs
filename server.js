const express = require('express')
const app = express();

app.get('/',function(req,res){
    res.send('hello world how i can help you')
})
app.get('/panir',function(req,res){
    res.send('sure sir! panir is ready')
})
app.get('/daal',function(req,res){
    res.send('daal fry , daal kadi,tarka daal')
})
app.get('/idli',function(req,res){
    res.send('idli is present')
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
})