var mongooseconn = require('mongoose');
mongooseconn.connect('mongodb+srv://Waruna:1qaz@shopifirecluster-qkn98.mongodb.net/shopifire?retryWrites=true&w=majority',function (error) {
    if(error==null)
    {
        console.log("Connected");
    }
    else
    {
        console.log(error);
    }
});


// mongooseconn.connect( '127.0.0.1:27017/testdb',{
//     useNewUrlParser: true,useUnifiedTopology: true
//   },function (error) {
//     if(error==null)
//     {
//         console.log("Connected");
//     }
//     else
//     {
//         console.log(error);
//     }
// });


// mongooseconn.connect('mongodb://localhost/node-demo',function (error) {
//     if(error==null)
//     {
//         console.log("Connected");
//     }
//     else
//     {
//         console.log(error);
//     }
// });

module.exports=mongooseconn;
// ' mongodb://127.0.0.1:27017/testdb', {
//   useNewUrlParser: true,useUnifiedTopology: true
// }

//mongodb+srv://Waruna:1qaz@shopifirecluster-qkn98.mongodb.net/test?retryWrites=true&w=majority