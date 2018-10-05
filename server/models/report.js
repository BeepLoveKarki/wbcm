let mongoose=require('mongoose');

let monthreportSchema=new mongoose.Schema({
  month:{
    type:String
  },
  itax:{
    type:Number,
	default:0
  },
  ctax:{
    type:Number,
	default:0
  },
});

let yearreportSchema=new mongoose.Schema({
  year:{
    type:String
  },
  monthdata:[monthreportSchema],
  totalitax:{
    type:Number,
	default:0
  },
  totalctax:{
    type:Number,
	default:0
  },
  officeName:{
     type:String
  }
});

let targetSchema=new mongoose.Schema({
   year:{
     type:String
   },
   month:{
     type:String
   },
   amount:{
     type:Number
   },
   officeName:{
     type:String
   }
});

let mreport=mongoose.model("mreport",monthreportSchema);
let yreport=mongoose.model("yreport",yearreportSchema);
let treport=mongoose.model("treport",targetSchema);

module.exports={mreport,yreport,treport};