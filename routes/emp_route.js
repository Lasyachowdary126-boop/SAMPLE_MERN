let express=require('express');
let router=express.Router();
let bcrypt=require('bcrypt');
let {users}=require('../models/users');

//localhost:3000/api/emp/register
router.post("/register",async (req,res)=>{
    console.log(req.body);
    req.body.password=await bcrypt.hash(req.body.password,10);
    let newuser=users(req.body);
    let result= await newuser.save();
    res.send(result);
})

router.post("/login",async (req,res)=>{
    let result=await users.findOne({email:req.body.email})
    if(result){
let matchpass=await bcrypt.compare(req.body.password,result.password);
    if(matchpass){
        res.send({"msg":"Login Success",
            "user":{
                _id:result._id,
                name:result.name,
                email:result.email,
                role:result.role
            }});
    }else{
        res.send({"msg":"Login Failed"});
    }
    }else{
        res.send({"msg":"User not found"});
    }
})







