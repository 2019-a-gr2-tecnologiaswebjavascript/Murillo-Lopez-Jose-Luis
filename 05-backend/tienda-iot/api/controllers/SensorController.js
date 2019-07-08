/**
 * SensorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    encenderLed : (req, res) => {
        console.log('asas')
        const parametros = req.allParams()
        if(parametros.idLed){
            console.log('Encendiendo LED ', parametros.idLed)
            return res.ok({
                mensaje: `LED ${parametros.idLed} encendido`
            })
        }else{
            return res.badRequest({
                error : 400,
                mensaje : 'No envía idLed'
            })
        }
    }


};

