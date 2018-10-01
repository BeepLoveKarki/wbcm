let express=require('express');
let path=require('path');
let parser=require('body-parser');
let cors=require('cors');
let app=express();

app.use(cors());
app.set('views','./public/main');
app.use('/static',express.static(__dirname+"/public"));
app.set('viewengine','ejs');
app.use(parser.json());
app.use(parser.urlencoded({extended:true})); //extended true lets post nested object

app.get('/',(req,res)=>{
  res.render('login.ejs');
});

app.get('/detect',(req,res)=>{
   res.render('detect.ejs');
});

/*app.get("*",(req,res)=>{
   res.redirect("/");
});*/

app.listen(8080);