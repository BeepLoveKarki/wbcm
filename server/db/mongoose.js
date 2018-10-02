let mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/wbcm',{useNewUrlParser:true});
module.exports={mongoose};