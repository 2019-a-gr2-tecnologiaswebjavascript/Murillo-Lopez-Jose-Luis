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

        const parametros = req.allParams

        const opcionesDeCarga = {
            maxBytes : 10000000,
            dirname : __dirname + '/../../archivos',
        }

        if (parametros.idProducto){

            req.file('imagen')
            .upload(
                opcionesDeCarga,
                async (error, archivosSubidos) =>{
                    console.log('dehdehde')
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
                        try{
                            const respuestaActualizar = await Producto.updateOne(
                                {
                                    id : parametros.idProducto
                                }).set(
                                    {
                                        imagenFD : archivosSubidos[0].fd
                                    }
                                )
                        }catch(e){
                            return res.serverError({
                                error: 500,
                                mensaje : 'Error del servidor'
                            })
                        }
                        return res.ok({
                            mensaje : 'ok'
                        })
                    }
                }
            )

        }else{
            return res.serverError({
                error : 400,
                mensaje : 'No envía ID del producto'
            })
        }
    },

    download : async (req, res) => {
        const parametros = req.allParams
        if(parametros.idProducto){

            try{
                const productoEncontrado = await Producto.findOne({
                    id : parametros.idProductp
                })
                if(!productoEncontrado){
                    return res.badRequest({
                        error : 400,
                        mensaje : 'No existe el producto'
                    })
                }else{
                    if(productoEncontrado.imagenFD){
                        res.set('Content-disposition')
                        
                        return res.download(
                            productoEncontrado.imagenFD
                        )

                    }else{
                        return res.badRequest({
                            error : 400,
                            mensaje : 'No existe el FD'
                        })
                    }
                }
            }catch(e){
                return
            }

        }else{
            return res.serverError({
                error : 500,
                mensaje : 'No envía el ID del producto'
            })
        }
    }

};
