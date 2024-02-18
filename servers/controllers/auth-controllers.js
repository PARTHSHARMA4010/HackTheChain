// dispatch and action
const User  = require("../models/userschema");
// const loginuser = require("../models/loginschema")

const login = async (req,res) =>{
//  try {
//     console.log(req.body);
//     // const{email , password} = req.body;
//        const{username} = req.body;

    
//     const userexist = await loginuser.findOne({username:username});
//     console.log(userexist);

//     if(!userexist){
//         return res.status(400).json({message : "Invalid Credentials"});
//     }
//     else {
//         return res.status(200).json(userexist);
//     }

    // const user = await userexist.comparePassword(password);
    // if(user){
    //     res.status(200).json({
    //         msg:"Login Succesful",
    //         userId : userexist.__id.toString(),
    //     })
    // } else {
    //     res.status(401).json({message : "Invalid email or password"});
    // }

    
//  } catch (error) {
//     res.status(400).json.send("error is there");
//  } 
try {
    console.log(req.body); 
    const{username ,email ,phone ,password} = req.body;
    const userExist = await User.findOne({username});
    console.log(userExist);
    if(userExist){
        return res.status(400).json({ msg :"user already exist"});
    }
 const usercreated =   await User.create({username ,email ,phone ,password});


    res.status(200).json({msg : usercreated});
} catch (e) {
    const status = 422 ;
    // res.status(400).send("not finding the page");
    console.log(e);
    const message = "error";
    const error = {
    status,
    message,
    };
    next(error);

}

    
};

const register = async (req,res) =>{
    try {
        console.log(req.body); 
        const{username ,email ,phone ,password} = req.body;
        const userExist = await User.findOne({email:email});
        console.log(userExist);
        if(userExist){
            return res.status(400).json({ msg :"email already exist"});
        }
     const usercreated =   await User.create({username ,email ,phone ,password});


        res.status(200).json({msg : usercreated});
    } catch (e) {
        const status = 422 ;
        // res.status(400).send("not finding the page");
        console.log(e);
        const message = "error";
        const error = {
        status,
        message,
        };
        next(error);

    }
    
};
module.exports = {login, register};


