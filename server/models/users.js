let mongoose=require('mongoose');

let dataSchema=new mongoose.Schema({
   name:{
     type:String
   },
   license:{
     type:String   
   },
   username:{
     type:String
   },
   password:{
     type:String
   },
   officeName:{
      type:String
   }
});