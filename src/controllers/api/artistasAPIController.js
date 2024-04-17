const path = require('path');
const db = require('../../database/models');

const artistasAPIController = {
    'list': async (req, res) => {
        db.Artista.findAll().then(response =>
            res.status(200).json(response))
    },
    create: (req, res) => {

        db.Artista.create(req.body
        ).then(creado=>{res.status(200).json(creado)})
       /*  return res.send('Puedes agregar un nuevo artista a nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/create/id desde la plataforma POSTMAN'); */
    },
    update: (req, res) => {
 db.Artista.update({
    nombre:req.body.nombre
 },
   { where:{
    id:req.params.id
 }}).then(resultado=>{
    res.status(200).json(resultado)
 })

      /*   return res.send('Puedes modifcar el nombre del artista en nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/update/id desde la plataforma POSTMAN'); */
    },

    destroy: (req, res) => {
         db.Artista.destroy({where:{
            id:req.params.id
         }}).then(
            response=>{
                res.status(200).json(response)
            }
         )

        /* return res.send('Puedes eliminar un artista a nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/delete/id desde la plataforma POSTMAN'); */
    }
}
module.exports = artistasAPIController;