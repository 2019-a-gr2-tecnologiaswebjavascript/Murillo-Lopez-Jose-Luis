/**
 * LedController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 const axios = require('axios')

module.exports = {
  
    encenderLed : async (req, res) => {
        const parametros = req.allParams()
        if(parametros.idLed){
            const url = 'http://localhost:1338/sensor/encenderLed'
            try{
                const respuesta = await axios.post(
                    url,
                    {
                        idLed : parametros.idLed
                    }
                )
                return res.ok({
                    mensaje: 'OK'
                })
            }catch (error){
                console.log('Error ', error)
                res.serverError({
                    error: 500,
                    mensaje: 'Error en el servidor IOT'
                })
            }
        }else{
            return res.serverError({
                mensaje: 'No envia idLed',
                error: 400
            })
        }
    }

};

