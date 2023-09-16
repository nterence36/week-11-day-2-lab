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

// Magic 8 Ball
app.get('/magic/:question', (req, res) => {
    let magicEight = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const question = req.params.question
    const randomNum = Math.floor(Math.random() * 8)
    for(let i = 0; i < magicEight.length; i++){
        if(randomNum ===i){
            magicEight=(magicEight[i])
        }
    }
    res.send(question + '<br> <h1>'+magicEight+'</h1>')
})


app.listen(port, function() {
    console.log('Listening on port', port)
   })

