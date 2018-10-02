let mongoose=require('mongoose');

let typeSchema=new mongoose.Schema({
  typeit:{ //individual or corporate
    type:String
  },
  taxrate:{
    type:Number
  }
});

let taxSchema=new mongoose.Schema({
  goodtype:{
    type:String
  },
  taxes:{
    type:[typeSchema]
  }
});



let tax=mongoose.model("tax",taxSchema);
let type=mongoose.model("type",typeSchema);

module.exports={tax,type}