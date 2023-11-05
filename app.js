const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({message: "Hello from EC2"})
})

app.get('/will', (req, res) => {
    res.json({message: "Okay, I will do that."})
})

app.get('/ready', (req, res) => {
    res.json({message: "Okay, I am ready"})
})

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})
module.exports = app