let mongoose=require('mongoose');
let {mreport,yreport,treport}=require('./report.js');

let pendingSchema=new mongoose.Schema({
  barcode:{
    type:String,
	default:'0'
  },
  goodtype:{
    type:String
  },
  name:{
    type:String
  },
  price:{
    type:Number
  },
  departureTime:{
    type:String
  },
  departureDate:{
    type:String
  },
  exportCompany:{
     type:String,
	 default:''
  },
  importCompany:{
     type:String,
	 default:''
  }
});

let arrivedSchema=new mongoose.Schema({
  pendingDetails:[pendingSchema],
  arrivalTime:{
    type:String 
  },
  arrivalDate:{
    type:String
  },
  taxrate:{
    type:Number
  },
  taxamount:{
    type:Number  
  },
  officeName:{
     type:String
  }
});

arrivedSchema.statics.withbarcode=function(office,res){ //corporate arrived with barcode
    let data=new Array();
   this.find({officeName:office},(err,result)=>{
     if(result.length==0){
		 res.send(JSON.stringify({data:"no"}));
	 }else{
	  result.forEach((val)=>{
	    val["pendingDetails"].forEach((val1)=>{
		  if(val1["barcode"].length!=0 && val1["exportCompany"].length!=0 && val1["importCompany"].length!=0 && val["arrivalTime"].length!=0 && val["arrivalDate"].length!=0){
		    data.push(val);
		  }
		});
	  });
	  if(data.length==0){
	     res.send(JSON.stringify({data:"no"}));
	  }else{
	    res.send(JSON.stringify({data:data}));
	  }
	}
   });
}

arrivedSchema.statics.withnobarcode=function(office,res){ //corporate arrived with no barcode
   let data=new Array();
   this.find({officeName:office},(err,result)=>{
     if(result.length==0){
		 res.send(JSON.stringify({data:"no"}));
	 }else{
	  result.forEach((val)=>{
	    val["pendingDetails"].forEach((val1)=>{
		  if(val1["barcode"].length==0 && val1["exportCompany"].length!=0 && val1["importCompany"].length!=0 && val["arrivalTime"].length!=0 && val["arrivalDate"].length!=0 ){
		    data.push(val);
		  }
		});
	  });
	  if(data.length==0){
	     res.send(JSON.stringify({data:"no"}));
	  }else{
	    res.send(JSON.stringify({data:data}));
	  }
	}
   });
}

arrivedSchema.statics.withbarcode1=function(office,res){ //corporate pending with barcode
   let data=new Array();
   this.find({officeName:office},(err,result)=>{
     if(result.length==0){
		 res.send(JSON.stringify({data:"no"}));
	 }else{
	  result.forEach((val)=>{
	    val["pendingDetails"].forEach((val1)=>{
		  if(val1["barcode"].length!=0 && val1["exportCompany"].length!=0 && val1["importCompany"].length!=0 && val["arrivalTime"].length==0 && val["arrivalDate"].length==0){
		    data.push(val1);
		  }
		});
	  });
	  if(data.length==0){
	     res.send(JSON.stringify({data:"no"}));
	  }else{
	    res.send(JSON.stringify({data:data}));
	  }
	}
   });
}

arrivedSchema.statics.withnobarcode1=function(office,res){ //corporate pending with no barcode
  let data=new Array();
   this.find({officeName:office},(err,result)=>{
     if(result.length==0){
		 res.send(JSON.stringify({data:"no"}));
	 }else{
	  result.forEach((val)=>{
	    val["pendingDetails"].forEach((val1)=>{
		  if(val1["barcode"].length==0 && val1["exportCompany"].length!=0 && val1["importCompany"].length!=0 && val["arrivalTime"].length==0 && val["arrivalDate"].length==0){
		    data.push(val1);
		  }
		});
	  });
	  if(data.length==0){
	     res.send(JSON.stringify({data:"no"}));
	  }else{
	    res.send(JSON.stringify({data:data}));
	  }
	}
   });
}

arrivedSchema.statics.withbarcode2=function(office,res){ //individual arrived with barcode
   let data=new Array();
   this.find({officeName:office},(err,result)=>{
     if(result.length==0){
		 res.send(JSON.stringify({data:"no"}));
	 }else{
	  result.forEach((val)=>{
	    val["pendingDetails"].forEach((val1)=>{
		  if(val1["barcode"].length!=0 && val1["exportCompany"].length==0 && val1["importCompany"].length==0 && val["arrivalTime"].length!=0 && val["arrivalDate"].length!=0){
		    data.push(val);
		  }
		});
	  });
	  if(data.length==0){
	     res.send(JSON.stringify({data:"no"}));
	  }else{
	    res.send(JSON.stringify({data:data}));
	  }
	}
   });
}

arrivedSchema.statics.withnobarcode2=function(office,res){ //individual arrived with no barcode
  let data=new Array();
   this.find({officeName:office},(err,result)=>{
     if(result.length==0){
		 res.send(JSON.stringify({data:"no"}));
	 }else{
	  result.forEach((val)=>{
	    val["pendingDetails"].forEach((val1)=>{
		  if(val1["barcode"].length==0 && val1["exportCompany"].length==0 && val1["importCompany"].length==0 && val["arrivalTime"].length!=0 && val["arrivalDate"].length!=0){
		    data.push(val);
		  }
		});
	  });
	  if(data.length==0){
	     res.send(JSON.stringify({data:"no"}));
	  }else{
	    res.send(JSON.stringify({data:data}));
	  }
	}
   });
}

arrivedSchema.statics.pendtoarrive=function(barcode,date,time,year,month,res){
  let m,datas,cc;
  this.findOneAndUpdate({"pendingDetails.barcode":barcode},{$set:{arrivalDate:date,arrivalTime:time}},(err,result)=>{
	if(result==null){
	   res.send(JSON.stringify({data:"no"})); //no data entered
	}else{
	  if(result["pendingDetails"][0]["exportCompany"].length==0 && result["pendingDetails"][0]["importCompany"].length==0){
	    cc={itax:result["taxamount"]};
	  }else{
	    cc={ctax:result["taxamount"]};
	  }
	    yreport.findOneAndUpdate({year:year},{$inc:cc},(err,result1)=>{
		  result1["monthdata"].forEach((val,i)=>{
		    let r;
			if(val["month"]==month){
			   if(result["pendingDetails"][0]["exportCompany"].length==0 && result["pendingDetails"][0]["importCompany"].length==0){
			       val["itax"]+=result["taxamount"];
			   }else{
			      val["ctax"]+=result["taxamount"];
			   }
			   r=val;
			   m=month;
			   result1["monthdata"].splice(i);
			   result1["monthdata"].push(r);
			   datas=result1["monthdata"];
			}
		  });
		  yreport.findOneAndUpdate({year:year},{$pull:{monthdata:{"monthdata.month":m}}},(err0,result2)=>{
			 yreport.findOneAndUpdate({year:year},{$push:{monthdata:datas}},(err1,result3)=>{
			    result["arrivalDate"]=date;
				result["arrivalTime"]=time;
				res.send(JSON.stringify({data:result})); 
			 });
		  });
	      
	    });
	  
	}
  });

}

let pending=mongoose.model("pending",pendingSchema);
let arrived=mongoose.model("arrived",arrivedSchema);

module.exports={pending,arrived};