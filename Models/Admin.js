

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Admin = new Schema({
   
   
    email: {
        type: String,
    }
    ,
    name: {
        type: String,
    }
    ,
    password:{
        type:String,
    },
    site:{
        type:String,
    },
    
    stream:{
        type:String,
    },
    
    presence:{
        type:String,
    },
    
    productivity:{
        type:String,
    },
    staff:{
        type:String,
    },
    
    company:{
        type:String,
    },

    snaps:{
        type:String,
    },
    
    apps:{
        type:String,
    },
    
    gps:{
        type:String,
    },

    leave:{
        type:String,
    },
    
    note:{
        type:String,
    },
    
    reports:{
        type:String,
    },
    
    admin:{
        type:String,
    },

    
    projects:{
        type:String,
    },
    
    role1:{
        type:String,
    },


    
});






const AdminControl = mongoose.model('Admin', Admin);
module.exports =AdminControl
  
