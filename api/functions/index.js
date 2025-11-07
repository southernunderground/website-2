const { createHandler } = require('azure-function-express');
const app = require('../../backend/server');   // reuse Express
module.exports = createHandler(app);
