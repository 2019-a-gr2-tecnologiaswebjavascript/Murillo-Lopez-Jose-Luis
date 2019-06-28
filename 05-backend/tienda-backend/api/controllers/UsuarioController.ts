/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

declare var Producto;

module.exports = {

    saludar : async (req, res) => {
        const parametros = req.allParams()
        console.log(parametros)
        if(parametros.nombre){
            try{
                const productoEncontrado = await Producto.find({
                    where : {
                        id : 1
                    },
                    skip : 0,
                    limit : 5,
                    sort : 'id ASC'
                })
                console.log(productoEncontrado)
                
                return res.ok({
                    mensaje : `Bienvenido ${parametros.nombre}`,
                    producto : productoEncontrado
                })
            }catch(e){
                console.log(e)
                return res.serverError({
                    error: 500,
                    mensaje: 'Error del servidor'
                })
            }
        }else{
            return res.serverError({
                error: 400,
                mansaje : 'Petición inválida'
            })
        }
    },

    upload : (req, res) => {
        const opcionesDeCarga = {
            maxBytes : 10000000,
            dirname : __dirname + '/../../archivos',
        }
        req.file('imagen')
            .upload(
                opcionesDeCarga,
                (error, archivosSubidos) =>{
                    if(error){
                        return res.serverError({
                            error : 500,
                            mensaje : 'Error subiendo archivo de imagen'
                        })
                    }
                    const noExistenArchivos = archivosSubidos.length ===0
                    if(noExistenArchivos){
                        return res.badRequest({
                            error : 400,
                            mensaje : 'No se subió ningún archivo'
                        })
                    }else {
                        console.log(archivosSubidos)
                        return res.ok({
                            mensaje : 'ok'
                        })
                    }
                }
            )
    }

};
