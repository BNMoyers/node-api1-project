/*dependencies*/
const express = require('express');

/*server*/
const server = express();

/*request handlers */

/*listener*/
const port = 5000;
server.listen(port, () => console.log('test API - Hello'))