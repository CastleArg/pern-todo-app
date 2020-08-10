require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
var todoRouter = require('./routes/todo');

const swaggerDoc = YAML.load('./openapi.yaml');
console.log(swaggerDoc);

//middleware
app.use(cors());
app.use(express.json()); //req.body
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

console.log(process.env);
app.use('/todos', todoRouter);

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
