var mongoose = require('mongoose');

exports.index = function(req, res){
    res.render('index', {session: req.session});
}

exports.register=function(req,res){
    res.render('register');
}