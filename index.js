import { Duffel } from "@duffel/api";
import express from "express";
import {fileURLToPath} from 'url';
import path from 'path';
import bodyParser from 'body-parser';


const app = express()
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);



app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

const duffel = new Duffel({
  token: "duffel_test_Zmvi1LEoIM735nLKH4lCJ2TgARBX8ts1VS5v9KoS50t",
})


app.post("/", function(req, res){
  origin = req.body.origin;
  destination = req.body.destination;
  dept_date = req.body.deptDate;
  pass_adult = req.body.adult;
  pass_child = req.body.child;
  
  console.log(origin)
})



app.listen(3000, function(){
    console.log("Server running at port 3000");
})
