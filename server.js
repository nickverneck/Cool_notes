// Dependencies
const express = require('express');
// Sets up the Express App
const app = express();
const PORT = process.env.PORT | 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
// set up routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);
// starting up the server
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
  });