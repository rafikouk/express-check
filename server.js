//require express
const express = require("express")
const members = require("./members")
const logger = require("./middleware/logger")



//init express
const app = express()

app.use(logger)
// static files
app.use(express.static(__dirname = "/public"))
//get all members
app.get("/members", (req, res) => {
  res.json(members)
})

//get member by id
app.get("/members/:id", (req, res) => {
    res.json(members.filter(member => member.id === parseInt(req.params.id)))
})



//port
const PORT = 5000

//server
app.listen(PORT, (err) => {
    err ? console.log(err)
        : console.log(`Server running on port ${PORT}`)
})