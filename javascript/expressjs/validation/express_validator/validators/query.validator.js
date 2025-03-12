const { query } = require('express-validator');


const searchValidator = () => [
  query('title')
    .optional()
    .isString()
    .matches(/[a-z0-9]*/gim),
  // query('sort').isString().matches(/ASC|DESC/)
  query('sort')
    .optional()
    .isString().withMessage('Sort must be a string')
    .matches(/^(ASC|DESC)$/).withMessage('Sort must be either ASC or DESC')
];

module.exports = {
  searchValidator
}
