require('dotenv').config();
const express = require("express");

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDoc = YAML.load('./openapi.yaml');


const app = express();
const cors = require("cors");
var todoRouter = require('./routes/todo');

//middleware
app.use(cors());
app.use(express.json()); //req.body
app.use('/todos', todoRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.listen(5000, () => {
  console.log("server has started on port 5000");
});
