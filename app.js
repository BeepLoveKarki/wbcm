let express=require('express');
let path=require('path');
let parser=require('body-parser');
let cors=require('cors');
let bcrypt=require('bcryptjs');
let fs=require('fs');
let app=express();
let mongoose=require('./server/db/mongoose.js');
let {pending,arrived}=require('./server/models/goods.js');
let tax=require('./server/models/tax.js');
let client=require('./server/models/client.js');
let {mreport,yreport,treport}=require('./server/models/report.js');
let session = require('express-session');
let MongoStore = require('connect-mongo')(session);
let data;
let adbs = require("ad-bs-converter");

let options={
  url:'mongodb://localhost:27017/wbcm-sessions'
};

app.use(session({
    secret: 'foodieNepal123x',
	saveUninitialized: false,
    resave: false,
    store: new MongoStore(options)
}));

app.use(cors());
app.set('views','./public/main');
app.use('/static',express.static(__dirname+"/public"));
app.set('viewengine','ejs');
app.use(parser.json());
app.use(parser.urlencoded({extended:true})); //extended true lets post nested object

app.get('/',(req,res)=>{
  if(!req.session || !req.session["username"]){
    res.render('login.ejs');
  }else{
	client.findbyusername(req.session["username"],(result)=>{
	  res.render('dashboard.ejs',{office:result["officeName"],name:result["name"],post:result["post"]});
	});
  }
});

app.get("/signout",(req,res)=>{
   req.session.destroy(function(err) {
     res.redirect("/");
  });
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
  client.findbyusername(req.body["username"],(result)=>{
	if(result==null){
	   res.send(JSON.stringify({exists:"no"}));
	}else{
	   bcrypt.compare(req.body["password"],result["password"]).then((res1)=>{
		 if(res1==true){
			req.session["username"]=req.body["username"];
		    res.send(JSON.stringify({exists:"yes"}));
		 }else{
		   res.send(JSON.stringify({exists:"no"}));
		 }
	   });
	}
  });
  
});

app.post("/getgoods",(req,res)=>{
  //req.body["group"], req.body["goods"],req.body["barcode"]
  
  if(req.body["group"]=="individual"){
      if(req.body["goods"]=="pending"){
	    res.send(JSON.stringify({possible:"no"}));
	  }else{
	     if(req.body["barcode"]=="barcode"){
		   arrived.withbarcode2(res); 
		 }else{
		   arrived.withnobarcode2(res);
		 }
	  }
  }else{
      if(req.body["goods"]=="pending"){
	    if(req.body["barcode"]=="barcode"){
		   arrived.withbarcode1(res);
		 }else{
		   arrived.withnobarcode1(res);
		 }
	  }else{
	     if(req.body["barcode"]=="barcode"){
		   arrived.withbarcode(res);
		 }else{
		   arrived.withnobarcode(res);
		 }
	  }
  }
  
});

app.post("/deletegood",(req,res)=>{
  arrived.deleteOne({"pendingDetails.name":req.body["name"]},(err,result)=>{
    if(err) console.log(err);
	res.send(JSON.stringify({status:"done"}));
  });
});

app.post("/barcode",(req,res)=>{ //barcode scanning
  let date=new Date();
  let sdate=((date.getFullYear())+"/"+(date.getMonth()+1)+"/"+(date.getDate())).toString();
  let month=adbs.ad2bs(sdate)["en"]["strMonth"];
  let year=adbs.ad2bs(sdate)["en"]["year"];
  arrived.pendtoarrive(req.body["barcode"],req.body["date"],req.body["time"],res);
});

app.post("/gettax",(req,res)=>{
  let taxm,taxr;
  tax.findOne({goodtype:req.body["good"]},(err,result)=>{
    if(req.body["group"]="individual"){
	   taxm=(result["itax"]/100)*Number(req.body["price"]);
	   taxr=result["itax"];
	}else{
	   taxm=(result["ctax"]/100)*Number(req.body["price"]);
	   taxr=result["ctax"];
	}
	res.send(JSON.stringify({tax:taxm,rate:taxr}));
  });
});



app.post("/newgood",(req,res)=>{
  let arriveds,amt=0,amt1=0;
  let date=new Date();
  let sdate=((date.getFullYear())+"/"+(date.getMonth()+1)+"/"+(date.getDate())).toString();
  let month=adbs.ad2bs(sdate)["en"]["strMonth"];
  let year=adbs.ad2bs(sdate)["en"]["year"];
  tax.findOne({goodtype:req.body["type"]},(err,result)=>{
	let pendings=new pending({barcode:req.body["barcode"],name:req.body["name"],goodtype:req.body["type"],price:req.body["price"],departureTime:req.body["departuretime"],
    departureDate:req.body["departuredate"],importCompany:req.body["importcompany"],exportCompany:req.body["exportcompany"]});
	
	if(req.body["importcompany"].length==0 && req.body["exportcompany"].length==0){
      amt=(result["itax"]/100)*req.body["price"];
	  arriveds=new arrived({pendingDetails:[],arrivalTime:req.body["arrivaltime"],arrivalDate:req.body["arrivaldate"],taxrate:result["itax"],taxamount:amt});
	}else{
	  amt1=(result["ctax"]/100)*req.body["price"];
	  arriveds=new arrived({pendingDetails:[],arrivalTime:req.body["arrivaltime"],arrivalDate:req.body["arrivaldate"],taxrate:result["ctax"],taxamount:amt1});
	}
	
	if(req.body["oldones"]){
	    
		arrived.deleteOne({"pendingDetails.name":req.body["oldones"]},(err,result)=>{ //i think left here
	      arriveds.pendingDetails.push(pendings);
          arriveds.save().then((err,doc)=>{
              res.send(JSON.stringify({status:"done"}));
			});
	   });
	
	}else{
	  if(req.body["arrivaltime"].length!=0 && req.body["arrivaldate"]!=0){
        yreport.findOne({year:year},(err,result)=>{
		  if(result==null){
			let yreports,mreports;
			if(amt!=0){
			  yreports=new yreport({year:year,totalitax:amt,monthdata:[]});
              mreports=new mreport({month:month,itax:amt});
			  yreports.monthdata.push(mreports);
			}
			if(amt1!=0){
			  yreports=new yreport({year:year,totalctax:amt1,monthdata:[]});
              mreports=new mreport({month:month,ctax:amt1});
			  yreports.monthdata.push(mreports);
			}
		     yreports.save().then((err,doc)=>{
			    arriveds.pendingDetails.push(pendings);
                    arriveds.save().then((err,doc)=>{
                          res.send(JSON.stringify({status:"done"}));
                });	
			 });
		  }else{
		      let r,mreports1;
			  if(amt!=0){
			    r={
				  $inc:{'totalitax':amt}
				};
			  }
			  if(amt1!=0){
			     r={
				   $inc:{'totalctax':amt1}
				 };
			  }
			  
			  yreport.findOneAndUpdate({year:year},r,(err,result)=>{
				  yreport.findOne({"monthdata.month":month},(err,result)=>{
					 if(result==null){
					   result.monthdata.push(mreports);
					   if(amt!=0){
                            mreports1=new mreport({month:month,itax:amt});							   
					     }
					   if(amt1!=0){
							mreports1=new mreport({month:month,ctax:amt1});   
					    }
					 }else{
					   let data,ry;
					   result.monthdata.forEach((val,index)=>{
						  if(val["month"]==month){
						     if(amt!=0){
					           ry=val["itax"]+amt;
                               mreports1=new mreport({month:month,itax:ry});							   
					         }
					         if(amt1!=0){
					           ry=val["ctax"]+amt1;
							   mreports1=new mreport({month:month,ctax:ry});   
					         }
							 result.monthdata.splice(index,1);
						  }
					   });
					   result.monthdata.push(mreports1);
					 }
					 yreport.findOneAndUpdate({year:year},{monthdata:result.monthdata},(err,result1)=>{
			             arriveds.pendingDetails.push(pendings);
                           arriveds.save().then((err,doc)=>{
                               res.send(JSON.stringify({status:"done"}));
                         });		     
		  			 });
				  });					  
 			  });
		  }
    });
    }else{
	  arriveds.pendingDetails.push(pendings);
          arriveds.save().then((err,doc)=>{
                    res.send(JSON.stringify({status:"done"}));
           });
	   }
	}
  });
});

app.post("/newtax",(req,res)=>{
   let taxes=new tax({goodtype:req.body["type"],itax:req.body["i-tax"],ctax:req.body["c-tax"]});   
   if(req.body["oldones"]){
     tax.deleteOne({goodtype:req.body["oldones"]},(err,result)=>{
	    saveit(taxes,res);
     });
   }else{
     saveit(taxes,res);
   }
});

app.get("/goodtype",(req,res)=>{
  let types=new Array();
  tax.find({},(err,result)=>{
     if(result.length==0){
	    res.send(JSON.stringify({types:"no"}));
	 }else{
	  result.forEach((val)=>{
	     types.push(val["goodtype"]);
	  });
       res.send(JSON.stringify({types:types}));	  
	 }
  });
});

app.get("/getit",(req,res)=>{
  let date=new Date();
  let sdate=((date.getFullYear())+"/"+(date.getMonth()+1)+"/"+(date.getDate())).toString();
  let month=adbs.ad2bs(sdate)["en"]["strMonth"];
  let year=adbs.ad2bs(sdate)["en"]["year"];
  res.send(JSON.stringify({year:year,month:month}));
});

app.get("/taxes",(req,res)=>{
   let itax=new Array();
   let ctax=new Array();
   let dates=new Array();
   yreport.find({},(err,result)=>{
      if(result.length==0){
	      res.send(JSON.stringify({data:"no"}));
	  }else{
		result.forEach((val1)=>{
	     val1["monthdata"].forEach((val)=>{
		     itax.push(val["itax"]);
			 ctax.push(val["ctax"]);
			 dates.push(val["month"]+"-"+val1["year"]);
		 });
		});
		res.send(JSON.stringify({itax:itax,ctax:ctax,dates:dates}));
	  }
   });
});

app.post("/settarget",(req,res)=>{
  let date=new Date();
  let sdate=((date.getFullYear())+"/"+(date.getMonth()+1)+"/"+(date.getDate())).toString();
  let month=adbs.ad2bs(sdate)["en"]["strMonth"];
  let year=adbs.ad2bs(sdate)["en"]["year"];
    treport.findOne({year:year,month:month},(err,result)=>{
	   if(result==null){
	     let treports=new treport({year:year,month:month,amount:req.body["target"]});
		 treports.save().then((err,doc)=>{
		    res.send(JSON.stringify({status:"done"}));
		 });
	   }else{
	      treport.findOneAndUpdate({year:year,month:month},{$set:{amount:req.body["target"]}},(err,result)=>{
			 res.send(JSON.stringify({status:"done"}));
		  });
	   }
	});
});

function saveit(taxes,res){
    taxes.save().then((err,doc)=>{
      res.send(JSON.stringify({status:"done"}));
     });
}

app.get("/tax",(req,res)=>{
   let data=new Array();
   tax.find({},(err,result)=>{
	if(result.length==0){
	   res.send(JSON.stringify({exists:"no"}));
	}else{
      result.forEach((val)=>{
	     data.push(val);
	  });
	  res.send(JSON.stringify({data:data}));
	}
  });
   
});

app.get("/reportdata",(req,res)=>{
  let itax=new Array();
  let ctax=new Array();
  let dmonths=new Array();
  let tmonths=new Array();
  let tamt=new Array();
  let date=new Date();	
  let sdate=((date.getFullYear())+"/"+(date.getMonth()+1)+"/"+(date.getDate())).toString();
  let month=adbs.ad2bs(sdate)["en"]["strMonth"];
  let year=adbs.ad2bs(sdate)["en"]["year"];
  yreport.findOne({year:year},(err,result)=>{
      if(result==null){
	     res.send(JSON.stringify({data:"no"}));
	  }else{
		result["monthdata"].forEach((val)=>{
		   itax.push(val["itax"]);
		   ctax.push(val["ctax"]);
		   dmonths.push(val["month"]);
		});
	    treport.find({year:year},(err1,result1)=>{
	     if(result1.length==0){
		   res.send(JSON.stringify({target:"no"}));
		 }else{
		   result1.forEach((val)=>{
			   tmonths.push(val["month"]);
			   tamt.push(val["amount"]);
		   });
		   res.send(JSON.stringify({itax:itax,ctax:ctax,dmonths:dmonths,tmonths:tmonths,tamt:tamt}));
		 }
	    });
	  }
  });
});

app.post("/deletetax",(req,res)=>{
  //req.body["goodtype"];
  tax.deleteOne({goodtype:req.body["goodtype"]},(err,result)=>{
	 res.send(JSON.stringify({status:"done"}));
  });
});

/*app.get("*",(req,res)=>{
   res.redirect("/");
});*/

app.listen(8080);