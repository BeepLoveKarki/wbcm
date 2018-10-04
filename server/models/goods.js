let mongoose=require('mongoose');

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
  }
});

arrivedSchema.statics.withbarcode=function(res){ //corporate arrived with barcode
    let data=new Array();
   this.find({},(err,result)=>{
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

arrivedSchema.statics.withnobarcode=function(res){ //corporate arrived with no barcode
   let data=new Array();
   this.find({},(err,result)=>{
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

arrivedSchema.statics.withbarcode1=function(res){ //corporate pending with barcode
   let data=new Array();
   this.find({},(err,result)=>{
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

arrivedSchema.statics.withnobarcode1=function(res){ //corporate pending with no barcode
  let data=new Array();
   this.find({},(err,result)=>{
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

arrivedSchema.statics.withbarcode2=function(res){ //individual arrived with barcode
   let data=new Array();
   this.find({},(err,result)=>{
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

arrivedSchema.statics.withnobarcode2=function(res){ //individual arrived with no barcode
  let data=new Array();
   this.find({},(err,result)=>{
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

arrivedSchema.statics.pendtoarrive=function(barcode,date,time,res){
  this.findOneAndUpdate({"pendingDetails.barcode":barcode},{$set:{arrivalDate:date,arrivalTime:time}},(err,result)=>{
	if(result==null){
	   res.send(JSON.stringify({data:"no"})); //no data entered
	}else{
	    res.send(JSON.stringify({data:result}));
	}
  });
}

let pending=mongoose.model("pending",pendingSchema);
let arrived=mongoose.model("arrived",arrivedSchema);

module.exports={pending,arrived};