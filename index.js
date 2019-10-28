/*dependencies*/
const express = require("express");
const db = require("./data/db.js");

/*server*/
const server = express();
server.use(express.json());

/*request handlers */
server.post("/users", (req, res) => {
  const { name, bio } = req.body;

  (!name || !bio)
    ? res
        .status(400)
        .json({ errorMessage: "Please provide name and bio for the user" })
    : db
        .insert(req.body)
        .then(user => {
          res.status(201).json(user);
        })
        .catch(() => {
          res
            .status(500)
            .json({
              error: "There was an error while saving the user to the database"
            });
        });
});

server.get("/users", (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The users information could not be retrieved. " });
    });
});

/*listener*/
const port = 5000;
server.listen(port, () => console.log("test API running on port 5000"));
