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

arrivedSchema.statics.withbarcode=function(res){
   this.find({barcode:{$ne:'0'}},(err,result)=>{
      if(result.length==0){
	     res.send(JSON.stringify({data:"no"}));
	  }else{
          console.log(result); 
	  }
   });
}

arrivedSchema.statics.withnobarcode=function(res){
   this.find({barcode:'0'},(err,result)=>{
     if(result.length==0){
	     res.send(JSON.stringify({data:"no"}));
	 }else{
	 
	 }
   });
}

pendingSchema.statics.withbarcode=function(res){
  this.find({barcode:{$ne:'0'}},(err,result)=>{
      if(result.length==0){
	     res.send(JSON.stringify({data:"no"}));
	  }else{
	    
	  }
   });
}

pendingSchema.statics.withnobarcode=function(res){
  this.find({barcode:'0'},(err,result)=>{
      if(result.length==0){
	     res.send(JSON.stringify({data:"no"}));
	  }else{
	  
	  }
   });
}

let pending=mongoose.model("pending",pendingSchema);
let arrived=mongoose.model("arrived",arrivedSchema);

module.exports={pending,arrived};