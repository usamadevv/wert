

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Sueprvisor = new Schema({
   
   
    name: {
        type: String,
        
    }
    ,

   
    imgurl: {
        type: String,
        
    }
    ,

    siteid:{
        type:String,
    },
    sitename:{
        type:String
    }
    ,
    phone: {
        type: String
    },
    
    address: {
        type: String
    },
    status: {
        type: String
    },
    
    pass: {
        type: String
    },

    email: {
        type: String
    },
    
});






const Super = mongoose.model('Sueprvisor', Sueprvisor);
module.exports =Super
  
