const jwt=require("jsonwebtoken")
module.exports=function(req,res,next){
    try {
        let token1 =req.header('x-token1');
        if(!token1){
            return res.send("Token not found!")
        }
        let decode= jwt.verify(token1,process.env.SECRETKEY2)
        req.user1=decode.user1
        next()
    } catch (err) {
        console.log(err)
        return res.send("Server Error!")
    }
}
