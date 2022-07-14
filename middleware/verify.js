const validToken = require('../token')

const verify = (req, res, next) =>{

    console.log('verify')

    const header = req.headers.authorization;
    console.log(header);
    const conType = req.headers['content-type'];
    console.log(conType);

    if (!header) {
        return res.status(401).json("Token not found");
    }
    
    const token = header.split(" ")[1];
    console.log(token);

    if (!token) {
        return res.status(401).json("No valid token");
    }

    console.log(conType.indexOf('application/json'));

    if(token !== validToken || !conType || conType !== 'application/json'){
        return res.status(401).json('No Way');
    }else{
        console.log('EVERYTHING OK')
        next();
    }  
};

module.exports = verify;