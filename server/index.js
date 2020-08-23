require('dotenv').config();
const port = process.env.PORT || 443;
const express = require("express");
const path = require("path");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDoc = YAML.load('./openapi.yaml');


const app = express();
const cors = require("cors");
var todoRouter = require('./routes/todo');

console.log(process.env.NODE_ENV,process.NODE_ENV);

app.use(cors());
app.use(express.json()); //req.body
app.use('/api/todos', todoRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// app.use(express.static(path.join(__dirname, 'client/build')));
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});
