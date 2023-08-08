

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Siteuser = new Schema({
   
   
    name: {
        type: String,
        
    },
  
   
    cpr: {
        type: String,
        
    },
    langlat: {
        type: String,
        
    },
   
    password: {
        type: String,
        
    },
    
   
imgurl: {
        type: String,
        
    },
    email:{

        type: String,
    },
    dob:{

        type: String,
    },
    gender:{

        type: String,
    },
    login: {
        type: String,
        
    }
    ,
    
    addedusers:[
        
        {
            
            userid:{
            type:String,
            unique:true,
        },role:{
            type:String,
        },
        username:{
            type:String,
        },
        status:{
            type:String,
        },
    }
        ],
    wages: {
        type: String,
        
    }
    ,
    taxes:{
        type:String,
    },
    nc:{
        type:String
    }
    
    ,
    linkedsites:[
        {
projectid:{
    
    type: String
}}
    ],
    skill: {
        type: String
    },
    clientid: {
        type: String
    },
    client: {
        type: String
    },
    address:{
        type:String
    }
    ,
    phone:{
        type:String
    }
    ,
    
    itin:{
        type:String
    }
    ,
    status: {
        type: String
    },
    
    
    payrate: {
        type: String
    },
    otpayrate: {
        type: String
    },
    
    idno: {
        type: String
    },


    
});






const SiteUserd = mongoose.model('Siteuser', Siteuser);
module.exports =SiteUserd
  
