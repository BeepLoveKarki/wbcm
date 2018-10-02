let mongoose=require('mongoose');

let taxSchema=new mongoose.Schema({
  goodtype:{
    type:String
  },
  taxes:{
    type:typeSchema
  }
});

let typeSchema=new mongoose.Schema({
  typeit:{
    type:String
  },
  taxrate:{
    type:Number
  }
});