function validator(){
    return (req,res,next) => {

        if(typeof req.params.name == "string"){ ///////////////////////////////
            req.name = req.params.name;
            next();
        }else{
            next(`the ${req.params.name} is not string`);
        }
        
    }

} 

module.exports = validator;