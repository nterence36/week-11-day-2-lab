const express = require('express')
const app = express()
const port = 3000

// Greetings
app.get('/greetings/:name', (req, res) => {
    res.send('<h1>Hello, '+req.params.name+ '! It\'s so great to see you!</h1>')
})

// Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) =>{
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const tips = (tipPercentage/100)*total
 
    res.send("<h2>Tips: "+tips+ "</h2>")
})

app.listen(port, function() {
    console.log('Listening on port', port)
   })

