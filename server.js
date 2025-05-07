const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./src/middlewares/logger');
const routes = require('./src/routes');

const app = express();

app.use(bodyParser.json());

app.use(logger);

routes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});