exports.login = (req,res) => {
   // const {username , password } = req.body;
    res.setHeader("Set-Cookie","loggedIn=true");
    res.send({
       message:"user logged in successfully"
    })
};