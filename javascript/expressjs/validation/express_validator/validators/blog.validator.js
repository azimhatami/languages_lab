const { param } = require('express-validator');

const IdValidator = param('id').isMongoId().withMessage('Invalid Object Id');


module.exports = {
  IdValidator
}
