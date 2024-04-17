const path = require('path');
const db = require('../../database/models');

const albumesAPIController = {
    'list': (req, res) => {

      return  db.Album.findAll().then(resultado=>res.status(200).json(resultado))
    },

    'detail': (req, res) => {

      return  db.Album.findByPk(req.params.id).then(resultado=>{res.status(200).json(resultado)})
    }
}

module.exports = albumesAPIController;