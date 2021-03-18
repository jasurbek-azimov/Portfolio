// const { response } = require('express')
// const express = require('express')
// const app = express()
// const port = 3000


// app.get('/', function(request, response){
//     response.sendFile(__dirname+'/Portfolio.html')
// })

// app.get("/portfolio.css",(req,res) => {
//   res.sendFile(__dirname+"/portfolio.css")
// })
// app.get('/contact',function (req, res){
//         res.send("<h1> Mening kontaktlarim: +998 93 705 36 05 </h1>")
//         console.log(res)

// })
// app.post('/', function (req, res) {
//     res.send('POST request to homepage')
//   })
// app.get('/haqida',function (req, res){
//   res.send('<h1> Bu web-sayt avtori: Jasurbek Azimov, Sayt Portfolio saytdir </h1>')
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
//   })
  const express  = require('express')
  const body_parser = require('body-parser')
  const app = express()
  app.use(body_parser.urlencoded({ extended: true }))
  
  
  
  app.get("/", (req,res) => {
      res.sendFile(__dirname+"/index.html")
  })
  app.post("/bmi", (req,res) => {
      boy = req.body.uzunlik
      vazn =req.body.vazn
      ism=req.body.ism
      familiya=req.body.familiya
      vil=req.body.viloyat
      bmi = vazn / boy ** 2
          console.log(req.body)
      res.send("Vazn:  "+vazn+"<br> boy:  "+boy+'<br> ism:  '+ism+'<br> familiya:  '+familiya)
  })
  


  app.listen(3000, () => {
      console.log("app ishlayapti")
  })