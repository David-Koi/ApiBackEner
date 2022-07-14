let express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const axios = require('axios').default;

class resController{

        resBack = (req, res) =>{

            let family = {
                "numserie": 9999,
                "tipo_dispositivo": 3,
                "id_padre": null,
                "id_abuelo": null,
                "padres": [
                  {
                    "numserie": 8888,
                    "tipo_dispositivo": 2,
                    "id_padre": null,
                    "id_abuelo": 9999,
                    "hijos": [
                      {
                        "numserie": 5555,
                        "tipo_dispositivo": 1,
                        "id_padre": 8888,
                        "id_abuelo": 9999
                      }
                    ]
                  },
                  {
                    "numserie": 7777,
                    "tipo_dispositivo": 2,
                    "id_padre": null,
                    "id_abuelo": 9999,
                    "hijos": [
                      {
                        "numserie": 6666,
                        "tipo_dispositivo": 1,
                        "id_padre": 7777,
                        "id_abuelo": 9999
                      },
                      {
                        "numserie": 4444,
                        "tipo_dispositivo": 1,
                        "id_padre": 7777,
                        "id_abuelo": 9999
                      }
                    ]
                  }
                ]
              };

              family = JSON.stringify(family);
              
                console.log(family);

              res.send(family);
            
        }
}

module.exports = new resController();