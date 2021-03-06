/**
 * ProductoUsuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cantidad : {
      type : 'number',
      min : 1
    },
    fkUsuario : {
      model : 'Usuario',
      required : true
    },
    fkProducto : {
      model : 'Producto'
    }

  },

};

