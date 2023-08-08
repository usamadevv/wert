// Importing important Invoices
const express = require('express');
const app = express();
const Invoiceroute = express.Router();
let Invoice = require('../Models/Invoice');
var nodemailer = require('nodemailer');
const date = require('date-and-time');



Invoiceroute.route('/update').post(function(req, res) {
    Invoice.findByIdAndUpdate(
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

                    res.status(200).json({'Invoice':success});
                }
                
             }
         }
    
      
    )
    

    
});

Invoiceroute.route('/updateptime').post(function(req, res) {
    Invoice.findOneAndUpdate(
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

                    res.status(200).json({'Invoice':success});
                }
                
             }
         }
    
      
    )
    

    
});

Invoiceroute.route('/updateitime').post(function(req, res) {
    Invoice.findOneAndUpdate(
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

                    res.status(200).json({'Invoice':success});
                }
                
             }
         }
    
      
    )
    

    
});


Invoiceroute.route('/updatetime').post(function(req, res) {
    console.log(req)
    Invoice.findByIdAndUpdate(
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

                    res.status(200).json({'Invoice':success});
                }
                
             }
         }
    
      
    )
    

    
});

Invoiceroute.route('/add').post(function(req, res) {

    let Invoices = new Invoice(req.body);
    Invoices.save()
        .then(Invoice => {
            res.status(200).json({'Invoice': 'Invoice added successfully'});
            
        })
        .catch(err => {
          console.log("erer")
        });
});


Invoiceroute.route('/getall').get(function(req, res) {

    Invoice.find(
        { }).sort({createdAt: -1}).exec(

       
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Invoice':success});
                }
                
             }
         }
    
      
    )
});




Invoiceroute.route('/find').post(function(req, res) {
    Invoice.find(
        { Invoice_id:req.body.Invoice_id}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Invoice':success});
                }
                
             }
         }
    
      
    )
    

    
});








module.exports = Invoiceroute;
