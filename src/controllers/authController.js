exports.login = (req,res) => {
    const {username , password } = req.body;
    console.log('From the server', username,password);
    res.cookie("isLoggedIn","true",{domain:'sheltered-castle-73623.herokuapp.com'});
    res.send({
       message:"user logged in successfully"
    })
};