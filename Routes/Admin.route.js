// Importing important Admins
const express = require('express');
const app = express();
const Adminroute = express.Router();
let Admin = require('../Models/Admin');
const date = require('date-and-time');
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'saleemjadoon766@gmail.com',
        pass: 'zyhqnhmthrzgbeys'
    }
});
// Your AccountSID and Auth Token from console.twilio.com
const accountSid = 'ACa5a38c062d3546c2e2fd9e3f42530c78';
const authToken = '68264670a0b5a32860ef2a2b672b359a';

const client = require('twilio')(accountSid, authToken);

Adminroute.route('/pass').post(function(req, res) {
    Admin.findOneAndUpdate(
        { email:req.body.email}, 

        {
           
            password:req.body.password

        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});


Adminroute.route('/sendmobileotp').get(function(req, res) {
  

  

    
client.messages
.create({
  body: '987654',
  to: '+447477194985', // Text your number
  from: '+12295455653', // From a valid Twilio number
})   .then((message) => console.log(message.sid));
});
Adminroute.route('/deletedata').post(function(req, res) {
    console.log(req.body)
    var ids= req.body.ids
    Admin.deleteMany(
        { _id:{ $in: ids }}, 
    
       function (error, success) {
             if (error) {
                res.send(error)
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});

Adminroute.route('/login').post(function(req, res) {
    Admin.findOne(
        { email:req.body.email,
        password:req.body.pass}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('error')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});

Adminroute.route('/login2').post(function(req, res) {
    Admin.findOne(
        { email:req.body.email}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('error')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});



Adminroute.route('/addchat').post(function(req, res) {
    console.log(req.body)
    Admin.findOneAndUpdate(
        { _id:req.body._id}, 

        {$push:{
            addedusers:{
            userid:req.body.userid,
            role:req.body.role,
            username:req.body.name,
            status:req.body.status

            }   
        } 

        },
    
       function (error, success) {
             if (error) {
                console.log(error)
                res.send('error')
             } else {
                if(!success){
console.log(success)
                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});



Adminroute.route('/update').post(function(req, res) {
    Admin.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            email:req.body.email,
            password:req.body.password,
            site:req.body.site,
            stream:req.body.stream,
            presence:req.body.presence,
            productivity:req.body.productivity,
            staff:req.body.staff,
            company:req.body.company,
            snaps:req.body.snaps,
            apps:req.body.apps,
            gps:req.body.gps,
            leave:req.body.leave,
            note:req.body.notes,
            reports:req.body.reports,
            admin:req.body.admin,
            role1:req.body.role,
            name:req.body.name,

        },
    
       function (error, success) {
             if (error) {
                console.log(error)
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});

Adminroute.route('/updateptime').post(function(req, res) {
    Admin.findOneAndUpdate(
        { userid:req.body.user_id,
            date:req.body.date
            }, 
        {
            
            $inc:{
                workingtime:1}



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});

Adminroute.route('/updateitime').post(function(req, res) {
    Admin.findOneAndUpdate(
        { userid:req.body.user_id,
        date:req.body.date
        }, 

        {
            
            $inc:{
                Idletime:1}



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});


Adminroute.route('/updatetime').post(function(req, res) {
    console.log(req)
    Admin.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            chkouttime:req.body.time,



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});



Adminroute.route('/sendotp').post(function(req, res) {
    console.log(req.body)
  
        
    
                
                    const mailOptions = {
                        from: 'Password Reset', // sender address
                        to: req.body.email, // list of receivers
                        subject: `Password Reset`, // Subject line
                        html: `<h1>Your Otp is  ${req.body.otp}.</h1>`// plain text body
                    };
                    
                    transporter.sendMail(mailOptions, function (err, info) {
                        if(err){
                            console.log(err)
                                res.status(200).json({'Admin':'fail'});}
                        else{
                            console.log(info);
                            
                    res.status(200).json({'Admin':'emailok'});}
                    })
                 
                
                 
              
      
    
    

    
});
Adminroute.route('/reset').post(function(req, res) {
    console.log(req.body)
    Admin.find(
        {email:req.body.email
        },
        
       function (error, success) {
             if (error) {
                console.log(error)
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{
                 if(success.length>0){
                    console.log(success)
                    const mailOptions = {
                        from: 'Password Reset', // sender address
                        to: req.body.email, // list of receivers
                        subject: `Password Reset`, // Subject line
                        html: `<h1>Your Otp for password reset is  ${req.body.otp}.</h1>`// plain text body
                    };
                    
                    transporter.sendMail(mailOptions, function (err, info) {
                        if(err){
                            console.log(err)
                                res.status(200).json({'Admin':'fail'});}
                        else{
                            console.log(info);
                            
                    res.status(200).json({'Admin':'emailok'});}
                    })
                 }
                 else{
                    
                    res.status(200).json({'Admin':'fail'});
                }
                 
                }
                
             }
         }
    
      
    )
    

    
});

Adminroute.route('/add').post(function(req, res) {

    let Admins = new Admin(req.body);
    Admins.save()
        .then(Admin => {
            res.status(200).json({'Admin': 'Admin added successfully'});
            
        })
        .catch(err => {
      console.log(err)
            res.status(200).json({'Admin':'exist'});
        });
});

Adminroute.route('/get').get(function(req, res) {

    let Admins = new Admin({
        email:'Usama',
        password:'123x'
    });
    Admins.save()
        .then(Admin => {
            res.status(200).json({'Admin': 'Admin added successfully'});
            
        })
        .catch(err => {
      console.log(err)
            res.status(200).json({'Admin':'exist'});
        });
});


Adminroute.route('/getall').get(function(req, res) {

    Admin.find(
        { }).sort({createdAt: -1}).exec(

       
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
});




Adminroute.route('/find').post(function(req, res) {
    Admin.findOne(
        { _id:req.body._id}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});

Adminroute.route('/finduserdata').post(function(req, res) {
    Admin.find(
        { userid:req.body.userid}).sort({createdAt: -1}).exec(
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});


Adminroute.route('/findcatt').post(function(req, res) {
    Admin.find(
        { date:req.body.date},
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});


Adminroute.route('/time').get(function(req, res) {
    var datec=new Date()
    var ustime=datec.toLocaleString("en-US", {hour12:false,timeZone: "America/New_York"})
    res.status(200).json({'Date':ustime});
    

    
});

Adminroute.route('/findcattuser').post(function(req, res) {
    Admin.find(
        { date:req.body.date,
        userid:req.body.userid,
        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});











module.exports = Adminroute;
