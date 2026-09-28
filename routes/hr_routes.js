let express=require("express");
let router=express.Router();
let {users}=require('../models/users');
let {tasks}=require('../models/tasks');

router.get("/viewemployees",async(req,res)=>{
    let result = await users.find();
    res.send(result);

});
router.post("/assign-task",(req,res)=>{
    res.send("assign task route");

});
router.put("/viewtasks",(req,res)=>{
    res.send("view tasks route");

});
router.delete("/deleteEmp/:id",async(req,res)=>{
    let result=await users.findByIdAndDelete(req.params.id)
    if(result){
        res.send("employee delted succesfully");

    }
    else{
        res.send("no user found");

    }

});

module.exports=router;
