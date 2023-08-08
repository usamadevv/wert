// Importing important Supervisors
const express = require('express');
const app = express();
const Supervisorroute = express.Router();
let Supervisor = require('../Models/Supervisor');
var nodemailer = require('nodemailer');
const date = require('date-and-time');

Supervisorroute.route('/deletedata').post(function(req, res) {
    console.log(req.body)
    var ids= req.body.ids
    Supervisor.deleteMany(
        { _id:{ $in: ids }}, 
    
       function (error, success) {
             if (error) {
                res.send(error)
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Supervisor':success});
                }
                
             }
         }
    
      
    )
    

    
});

Supervisorroute.route('/login').post(function(req, res) {
    Supervisor.find(
        { email:req.body.email,
        pass:req.body.pass}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('error')
                }
                else{

                    res.status(200).json({'Supervisor':success});
                }
                
             }
         }
    
      
    )
    

    
});

Supervisorroute.route('/login2').post(function(req, res) {
    Supervisor.findOne(
        { email:req.body.email}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('error')
                }
                else{

                    res.status(200).json({'Supervisor':success});
                }
                
             }
         }
    
      
    )
    

    
});


Supervisorroute.route('/profilechange').post(function(req, res) {
    Supervisor.findByIdAndUpdate(
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
Supervisorroute.route('/updatesite').post(function(req, res) {
    Supervisor.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            siteid:req.body.siteid,
            sitename:req.body.site,
         

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

                    res.status(200).json({'Supervisor':success});
                }
                
             }
         }
    
      
    )
    

    
});
Supervisorroute.route('/update').post(function(req, res) {
    Supervisor.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            name:req.body.name,
            siteid:req.body.siteid,
            sitename:req.body.sitename,
            status:req.body.status,
            phone:req.body.phone,
            address:req.body.address,
         

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

                    res.status(200).json({'Supervisor':success});
                }
                
             }
         }
    
      
    )
    

    
});

Supervisorroute.route('/updateptime').post(function(req, res) {
    Supervisor.findOneAndUpdate(
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

                    res.status(200).json({'Supervisor':success});
                }
                
             }
         }
    
      
    )
    

    
});

Supervisorroute.route('/updateitime').post(function(req, res) {
    Supervisor.findOneAndUpdate(
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

                    res.status(200).json({'Supervisor':success});
                }
                
             }
         }
    
      
    )
    

    
});


Supervisorroute.route('/updatetime').post(function(req, res) {
    console.log(req)
    Supervisor.findByIdAndUpdate(
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

                    res.status(200).json({'Supervisor':success});
                }
                
             }
         }
    
      
    )
    

    
});

Supervisorroute.route('/add').post(function(req, res) {

    let Supervisors = new Supervisor(req.body);
    Supervisors.save()
        .then(Supervisor => {
            res.status(200).json({'Supervisor': 'Supervisor added successfully'});
            
        })
        .catch(err => {
      
            res.status(200).json({'Supervisor':'exist'});
        });
});


Supervisorroute.route('/getall').get(function(req, res) {

    Supervisor.find(
        { }).sort({createdAt: -1}).exec(

       
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Supervisor':success});
                }
                
             }
         }
    
      
    )
});




Supervisorroute.route('/find').post(function(req, res) {
    Supervisor.find(
        { _id:req.body.Supervisor_id}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Supervisor':success});
                }
                
             }
         }
    
      
    )
    

    
});


Supervisorroute.route('/findbyname').post(function(req, res) {
    Supervisor.find(
        { name:req.body.name}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Supervisor':success});
                }
                
             }
         }
    
      
    )
    

    
});

Supervisorroute.route('/finduserdata').post(function(req, res) {
    Supervisor.find(
        { userid:req.body.userid}).sort({createdAt: -1}).exec(
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Supervisor':success});
                }
                
             }
         }
    
      
    )
    

    
});


Supervisorroute.route('/findcatt').post(function(req, res) {
    Supervisor.find(
        { date:req.body.date},
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Supervisor':success});
                }
                
             }
         }
    
      
    )
    

    
});


Supervisorroute.route('/time').get(function(req, res) {
    var datec=new Date()
    var ustime=datec.toLocaleString("en-US", {hour12:false,timeZone: "America/New_York"})
    res.status(200).json({'Date':ustime});
    

    
});

Supervisorroute.route('/findcattuser').post(function(req, res) {
    Supervisor.find(
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

                    res.status(200).json({'Supervisor':success});
                }
                
             }
         }
    
      
    )
    

    
});











module.exports = Supervisorroute;
