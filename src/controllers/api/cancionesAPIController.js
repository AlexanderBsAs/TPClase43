const path = require('path');
const db = require('../../database/models');

const cancionesAPIController = {
    'list':async (req, res) => {
      db.Cancion.findAll().then(response=>
    { res.status(200).json(response)})
/*      let generos=  await db.Genero.findAll().then(resultado=>{
       return resultado.forEach(genero=>{
          genero
        
       })})

      
    let canciones= db.Cancion.findAll().then (resultado=>{
        return resultado.forEach(cancion=>{
            cancion
        })
     })

       canciones.forEach(elemento=>{
        if (elemento.id_genero==generos.id){
            elemento.id_genero==generos.nombre

            
        }
     })

     res.status(200).json(canciones) */
    }
}
module.exports = cancionesAPIController;