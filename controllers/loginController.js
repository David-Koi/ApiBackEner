let express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const axios = require('axios').default;
const validToken = require('../token')

class loginController{

    login = (req, res) =>{

        console.log('login')
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUm9iZXJ0IFBvbHNvbiJ9.29IbaKdKB6LtSSZroDduaH7iQZT5dDR8Hvv838hu7Xo';

        axios.get('http://localhost:5003/res/verify', {
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-type": "application/json",
                "Authorization": `bearer ${validToken}`,
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
        console.error(error)
        })
    }
}

module.exports = new loginController();