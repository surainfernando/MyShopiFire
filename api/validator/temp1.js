
const userModel=require('../models/user')
module.exports=(req,res,next)=>
{
    const user = new userModel(req.body);
    var x=user["name"]
    if(x==="")
    {res.send("empty name vali")}
    else{
      next()
    }
    

}
