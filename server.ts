import express = require('express')

const app: express.Application = express()

app.get('/', function (req, res){
    res.send('HEllo this is typescript test')
})

app.listen(3000, ()=>{
    console.log(' this app run on port 3000')
})