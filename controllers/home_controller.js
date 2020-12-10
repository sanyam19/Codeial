module.exports.home = function(req,res){
    // will return something to the browser
    // return res.end('<h1>Express is up for Codeial!</h1>');
    
    // instead rendering an ejs file
    return res.render('home',{
        title : "Home"
    }); 
}

// module.exports.actionName = function(req,res){}