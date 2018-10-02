let express=require('express');
let path=require('path');
let parser=require('body-parser');
let cors=require('cors');
let app=express();
let mongoose=require('./server/db/mongoose.js');
let {pending,arrived}=require('./server/models/goods.js');
let {tax,type}=require('./server/models/tax.js');
let client=require('./server/models/client.js');

app.use(cors());
app.set('views','./public/main');
app.use('/static',express.static(__dirname+"/public"));
app.set('viewengine','ejs');
app.use(parser.json());
app.use(parser.urlencoded({extended:true})); //extended true lets post nested object

app.get('/',(req,res)=>{
  res.render('login.ejs');
});

app.get('/detect',(req,res)=>{ //scanning page
   res.render('detect.ejs');
});

app.post('/signup',(req,res)=>{
  client.findbyemail(req.body["email"],(result)=>{
    if(result==null){
	  client.findbypost(req.body["office"],req.body["post"],(result1)=>{
	    if(result1==null){
		   let clients=new client({name:req.body["name"],license:req.body["license"],username:req.body["username"],password:req.body["password"],
		   officeName:req.body["office"],email:req.body["email"],post:req.body["post"]});
		   clients.save().then((err,doc)=>{
		     res.send(JSON.stringify({done:"yes"}));
		   });
		}else{
		   res.send(JSON.stringify({exists1:"yes"}));
		}
	  });
	}else{
	   res.send(JSON.stringify({exists:"yes"}));
	}
  });
});

app.post('/signin',(req,res)=>{
  let data={
    username:req.body["username"],
	password:req.body["password"]
  }
  
  
});

/*app.get("*",(req,res)=>{
   res.redirect("/");
});*/

app.listen(8080);