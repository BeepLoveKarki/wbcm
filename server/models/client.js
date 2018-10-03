let mongoose=require('mongoose');
let bcrypt=require('bcryptjs');

let clientSchema=new mongoose.Schema({
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
   },
   email:{
     type:String
   },
   post:{
     type:String
   }
});


clientSchema.pre('save',function(next){
   if(this.isModified('password')){
     bcrypt.genSalt(10,(err,salt)=>{
	   bcrypt.hash(this.password,salt,(err,hash)=>{
	     this.password=hash;
		 next();
	   });
	 });
   }else{
     next();
   }
});

clientSchema.statics.findbyemail=function(email,callback){
  this.findOne({email:email},(err,result)=>{
	  callback(result);
  });
}

clientSchema.statics.findbypost=function(office,postname,callback){
  this.findOne({officeName:office,post:postname},(err,result)=>{
	  callback(result);
  });
}

clientSchema.statics.findbyusername=function(name,callback){
   this.findOne({username:name},(err,result)=>{
	  callback(result);
  });
}

let client=mongoose.model("client",clientSchema);
module.exports=client;