const path = require('path');
const db = require('../../database/models');

const mediosAPIController = {
    'list': (req, res) => {
      return  db.Medio.findAll().then(resultado=>{res.status(200).json(resultado)})
      
    }
}
module.exports = mediosAPIController;