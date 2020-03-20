'use strict';

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data');
const middleware = require('./middleware');
const mongoose1 = require('mongoose');
const userModel = require('../api/models/user');
const itemModel=require('../api/models/item.model')
const validate=require('../api/middleware/validator/register')
const loginValidate=require('../api/middleware/validator/login')
const userRoute=require('../api/routes/user')
const loginRoute=require('../api/routes/login')
const adminloginRoute=require('../api/routes/adminLog')
require('dotenv').config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);


mongoose1.connect(' mongodb://127.0.0.1:27017/testdb', {
  useNewUrlParser: true,useUnifiedTopology: true
});

// app.get('/api/products', (req, res) => {
//   return res.json(data.products);
// });

// app.post('/api/products', (req, res) => {
//   let products = [], id = null;
//   let cart = JSON.parse(req.body.cart);
//   if (!cart) return res.json(products)
//   for (var i = 0; i < data.products.length; i++) {
//     id = data.products[i].id.toString();
//     if (cart.hasOwnProperty(id)) {
//       data.products[i].qty = cart[id]
//       products.push(data.products[i]);
//     }
//   }
//   return res.json(products);
// });


// ====================================Scemar======================================
const mongoose = require('./config/keys');
var Schema = mongoose.Schema;

var fenceNodeConnection = new  Schema({
    
    id: Number,
    name: String,
    available_quantity: Number,
    price: Number,
    image: String,
    description: String

},{collection:'products',versionKey: false});
var itemNodeConnection = new  Schema({
    
  _id:String,
  title: String,
  price: Number,
  img: String,
  description: String

},{collection:'products',versionKey: false});

var fenceNodeConnection = mongoose.model('fenceNodeConnection',fenceNodeConnection);

app.get('/api/customers', (req, res) => {
  console.log("customers get 1000000000000000000000000")

  userModel.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

app.delete('/api/customers/:id', (req, res) => {
  console.log("customers delete 000000000000000000000000")

  userModel.findByIdAndDelete(req.params.id)
  .then(() => res.json('Item deleted.'))
  .catch(err => res.status(400).json('Error: ' + err));
});





// router.get('/',function (req, res, next) {

// });

// var arrayA = [];
var arrayB = [];
app.get('/api/products', (req, res) => {

    var GoodConnection=[];
    var BadConnection =[];
    var arrayA = [];

    itemModel.find()
        .then(function (doc) {
            if (doc)
            {
                for (var i=0;i<doc.length;i++)
                {
                    arrayA.push(doc[i])
                }
                arrayB = arrayA
                // console.log(b.length);
                 console.log("333ssssssssssssssssssss")
                 console.log(arrayA)
                return res.json(arrayA);

            }
            else
            {
                console.log("detabases error");
            }

        });
    
    

});

// app.get('/api/products', (req, res) => {

//   var GoodConnection=[];
//   var BadConnection =[];
//   var arrayA = [];

//   fenceNodeConnection.find()
//       .then(function (doc) {
//           if (doc)
//           {
//               for (var i=0;i<doc.length;i++)
//               {
//                   arrayA.push(doc[i])
//               }
//               arrayB = arrayA
//               return res.json(arrayA);

//           }
//           else
//           {
//               console.log("detabases error");
//           }

//       });

// });

// ====================================Scemar======================================


app.post('/api/products', (req, res) => {
  
  let products = [], id = null;
  let cart = JSON.parse(req.body.cart);
  if (!cart) return res.json(products)
  for (var i = 0; i < arrayB.length; i++) {
    id = arrayB[i].id.toString();
    if (cart.hasOwnProperty(id)) {

      arrayB[i].qty = cart[id]
      products.push(arrayB[i]);
    }
  }
 
  return res.json(products);
});


app.get('/api/test', (req, res) => {
  var GoodConnection=[];
  var BadConnection =[];
  var arrayA = [];
  console.log("search functon recieved")
 var a=req.params.testname
  console.log(a)

  itemModel.find()
      .then(function (doc) {
          if (doc)
          {
              for (var i=0;i<doc.length;i++)
              {
                var  itemobj=doc[i]
               // console.log(itemobj.title)
                if(itemobj.title=="Dog"&&itemobj.price>10)
                {arrayA.push(doc[i])}

                  
              }
              
              arrayB = arrayA
              // console.log(b.length);
              // console.log("ssssssssssssssssssss")
              return res.json(arrayA);

          }
          else
          {
              console.log("detabases error");
          }

      });
  
  console.log("------------------------------------------------------search recieved")
});


// ====================================Scemar======================================

app.post('/api/storecart', (req, res) => {
  
  console.log("cart request7-------------------------------------")
  
  let cart = req.body.cart;
  let userId=req.body.id
  console.log(userId)
  let email1="surain@gmail.com"
  // var user={name:"perera",email:"ss@dd.c",password:"123456"}
 // users.update({email:email1}, {$set:{name:"cart"}},{upsert: true}, function(err){});
  // userModel.save(user)
  // let user=new userModel({name:"perera",email:"ss@dd.c",password:"123456"})
  //             user.save()
 
  //return res.json(products);
  var id1 = mongoose.Types.ObjectId(userId);
  var id11="ObjectId(5e6e4ad9a119c22d6067f2ba)"
  userModel.findOne({ _id: id1 }, function (err, doc){
    doc.name ="cert";
    doc.cart=cart
    doc.save();
  });
});

app.use('/api/auth/login',loginValidate,loginRoute);
app.use('/api/auth/register',validate,userRoute);
app.use('/api/auth/adminLog',loginValidate,adminloginRoute);

const PORT = 5000;

app.listen(PORT);
console.log('api runnging on port ' + PORT + ': ');

// app.post('/api/auth/register', (req,res) => {
//   console.log("registern----------------")
//   let email=req.body.email
//   console.log(email)
//   let k=req.body.password
//   if (k == null||k===""){
//     console.log("null password")
// }
// else{
//   console.log("not null password")
//   console.log(k)
// }
//  // console.log(req.body.password)
// console.log("registration end")
// let user=new userModel({name:req.body.name,email:req.body.email,password:req.body.password})
// user.save()
// var x={emailstatus:true,emailmessage:"Email mpty"}
// return res.status("200").json(x);

// });