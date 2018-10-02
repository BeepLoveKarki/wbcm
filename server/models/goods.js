let mongoose=require('mongoose');

let pendingSchema=new mongoose.Schema({
  barcode:{
    type:String
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
  departureName:{
    type:String
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

let pending=mongoose.model("pending",pendingSchema);
let arrived=mongoose.model("arrived",arrivedSchema);

module.exports={pending,arrived};