require('dotenv').config()
let bodyParser = require('body-parser')
let express = require('express');
const res = require('express/lib/response');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post("/name", (req,res)=>{
  let string = req.body.first + " " + req.body.last
  res.json({name : string})
})

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path} - ${req.ip}`)
//   next()
// })

// app.get("/now",(req,res,next)=>{
//   req.time = Date.now()
//   console.log(req.time)
//   next()
// },(req,res)=>{
//   res.send({"time" : req.time})
// })


// app.get("/:word/echo",(req,res)=>{
//   res.send({"echo": req.params.word})
// })


app.get("/name", (req, res) => {
  let firstName = req.query.first
  let lastName = req.query.last
  res.send({ "name": `${firstName} ${lastName}` })
})

console.log("Hello World");


// app.get("/",(req,res)=>{
//     res.send("Hello Express")
// })


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})


app.use("/public", express.static(__dirname + "/public"))


var message = 'Hello json';
app.get("/json", (req, res) => {
  if (process.env['MESSAGE_STYLE'] === "uppercase") {
    res.json({ "message": message.toUpperCase() });
  }
  else {
    res.json({ "message": message });
  }
});

































module.exports = app;
