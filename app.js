const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.use(express.json())

app.get('/', function(req, res){
    res.send('<h1>express test</>')
})
app.get('/res', async function(req, res){
    
    res.json({"tom": "tomoya"})
})


app.listen(port, () => console.log(`listening on ${port}`))