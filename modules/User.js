var mongoose = require('mongoose');
//注意大坑：如果是user对应的数据集会自动变成users    
  var User = mongoose.model('user', new mongoose.Schema({  
      email: String,   
      pwd: String,   
      nicheng: String,
	  role:Number,
	  msgnum:Number,
	  realname:String,
	  idnumber:String,
	  photopath:String,
	  brief:String
    },{_id:true}));

module.exports=User;