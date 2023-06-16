function validator(){
    return (req,res,next) => {

        if(typeof req.body.name == "string"){ ///////////////////////////////
            req.name = req.body.name;
            next();
        }else{
            next(`the ${req.body.name} is not string`);
        }
        
    }

} 

module.exports = validator;