let mongoose=require('mongoose');

let taxSchema=new mongoose.Schema({
  goodtype:{
    type:String
  },
  itax:{
    type:Number
  },
  ctax:{
    type:Number  
  }
});



let tax=mongoose.model("tax",taxSchema);

module.exports=tax;