var mongoose = require( 'mongoose' );
var User = mongoose.model( 'User' );


exports.doCreate=function(req,res){
    var username=req.body.username;
    var email=req.body.email;
    var password=req.body.password;
 
    var newuser=new User();
    newuser.username=username;
    newuser.email=email;
    newuser.password=password;
 
    newuser.save(function(err,savedUser){
        if(err){
          console.log("User already exists with that username or email");
          var message="A user already exists with that username or email";
          res.render("register",{errorMessage:message});
          return;
        }else{
          req.session.newuser=savedUser.username;
          res.render("new-user",{session:req.session});
        }
    });
 }