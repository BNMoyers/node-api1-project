/*dependencies*/
const express = require('express');
const db = require('./data/db.js');

/*server*/
const server = express();

/*request handlers */
server.get('/users', (req,res) => {
    db.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to get users '})
    });
});

/*listener*/
const port = 5000;
server.listen(port, () => console.log('test API running on port 5000'))