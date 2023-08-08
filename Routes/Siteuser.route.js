// Importing important Siteuserds
const express = require('express');
const app = express();
const Siteroute = express.Router();
let Siteuserd = require('../Models/Siteuser');
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'saleemjadoon766@gmail.com',
        pass: 'zyhqnhmthrzgbeys'
    }
});

Siteroute.route('/update').post(function(req, res) {
    console.log(req.body.cpr)
    Siteuserd.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            name:req.body.name,
            nc:req.body.nc,
            taxes:req.body.taxas,
            skill:req.body.skill,
            payrate:req.body.pr,
            cpr:req.body.cpr,
            otpayrate:req.body.otpr,
            jobn:req.body.jobn,
            phone:req.body.phone,
            address:req.body.address,
            itin:req.body.itin,
            status:req.body.status,
            client:req.body.client,
            idno:req.body.idno,
            email:req.body.email,
            password:req.body.password,

            clientid:req.body.clientid,

            langlat:req.body.langlat

        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
    

    
});

Siteroute.route('/pass').post(function(req, res) {
    Siteuserd.findOneAndUpdate(
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

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
    

    
});

Siteroute.route('/updatebulk').post(function(req, res) {
   const objectToUpdate= req.body.preparedata.map( eachObj => {
        return {
            updateOne: {
                filter: { name: eachObj.Employee },
                update: {  wages: eachObj.net }
            }
        }
    })
    Siteuserd.bulkWrite(objectToUpdate,
        { ordered: false },
        function (error, success) {
            if (error) {
               res.send('error')
            } else {
               if(!success){

                   res.send('invalid')
               }
               else{

                   res.status(200).json({'Siteuserd':success});
               }
               
            }
        }
        )
    
});

Siteroute.route('/updatefromuser').post(function(req, res) {
    Siteuserd.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            name:req.body.name,
            skill:req.body.skill,
            phone:req.body.phone,
            status:req.body.status,

        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
    

    
});

Siteroute.route('/profilechange').post(function(req, res) {
    Siteuserd.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            imgurl:req.body.imgurl

        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
    

    
});

Siteroute.route('/updatestatus').post(function(req, res) {
    Siteuserd.findByIdAndUpdate(
        { _id:req.body._id}, 

        { login:req.body.login,
        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
    

    
});

Siteroute.route('/add').post(function(req, res) {

   

        Siteuserd.find(
            {
                email: req.body.email,
            },
            function(error, success) {
                if (error) {
                    res.status(500).json({ error: 'An error occurred' });
                } else {
                    if (success.length === 0) {
                        let Siteuserds = new Siteuserd(req.body);
                        Siteuserds.save()
                            .then(Siteuserd => {
                                res.status(200).json({'Siteuserd': 'Siteuserd added successfully'});
                            })
                            .catch(err => {
                              console.log("erer")
                            });
                            
                    } else {
                        res.status(200).json({ 'Siteuserd': 'user exist' });
                    }
                }
            }
        );
});


Siteroute.route('/getall').get(function(req, res) {

    Siteuserd.find(
        { }, 

       
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
});


Siteroute.route('/inactive').get(function(req, res) {

    Siteuserd.find(
        {
            status:'Inactive'
         }, 

       
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
});



Siteroute.route('/active').get(function(req, res) {

    Siteuserd.find(
        {
            status:'Active'
         }, 

       
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
});


Siteroute.route('/find').post(function(req, res) {
    Siteuserd.find(
        {_id:req.body.Siteuserd_id}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
    

    
});


Siteroute.route('/findone').post(function(req, res) {
    Siteuserd.findOne(
        {_id:req.body.Siteuserd_id}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
    

    
});

Siteroute.route('/findbyname').post(function(req, res) {
    Siteuserd.find(
        {name:req.body.name}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
    

    
});

Siteroute.route('/login').post(function(req, res) {
    Siteuserd.find(
        {email:req.body.email,
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

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
    

    
});

Siteroute.route('/reset').post(function(req, res) {
    console.log(req.body)
    Siteuserd.find(
        {email:req.body.email
        },
        
       function (error, success) {
             if (error) {
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
                                res.status(200).json({'Siteuserd':'fail'});}
                        else{
                            console.log(info);
                            
                    res.status(200).json({'Siteuserd':'emailok'});}
                    })
                 }
                 else{
                    
                    res.status(200).json({'Siteuserd':'fail'});
                }
                 
                }
                
             }
         }
    
      
    )
    

    
});

Siteroute.route('/delete').post(function(req, res) {
    console.log(req.body)
    var ids= req.body.ids
    Siteuserd.deleteMany(
        { _id:{ $in: ids }}, 
    
       function (error, success) {
             if (error) {
                res.send(error)
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
    

    
});

Siteroute.route('/addchat').post(function(req, res) {
    console.log(req.body)
    Siteuserd.findOneAndUpdate(
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
                res.send('error')
             } else {
                if(!success){
console.log(success)
                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Siteuserd':success});
                }
                
             }
         }
    
      
    )
    

    
});


Siteroute.route('/updatelinkedsites').post(function(req, res) {
    console.log(req.body)
    Siteuserd.findOneAndUpdate(
        { _id:req.body._id}, 

        {$push:{
            linkedsites:{
            projectid:req.body.pid
            }   
        } 

        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'User':success});
                }
                
             }
         }
    
      
    )
    

    
});










module.exports = Siteroute;
