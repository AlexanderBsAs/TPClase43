const path = require('path');
const db = require('../../database/models');

const genresAPIController = {
    'list': (req, res) => {
       return db.Genero.findAll().then(resultado=> res.status(200).json(resultado))
       
    }
}
module.exports = genresAPIController;