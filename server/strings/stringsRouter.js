const router = require('express').Router();
const bodyParser = require('body-parser');
const Strings = require('./stringsModel');
router.use(bodyParser.json());

// GET /api/v1/strings/
// Get all the strings from the database
router.get('/', (req, res) => {
  Strings.get()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({
        info: 'The strings could not be retrieved.',
        error: err,
      });
    });
});

// POST /api/v1/strings/
// Add a new string to the database
router.post('/', (req, res) => {
  if (req.body.string === undefined || req.body.string === '') {
    res.status(500).json({
      info: 'There is no string in the body.',
      error: 500,
    });
  } else {
    const data = {
      string: req.body.string,
    };

    Strings.insertString(data)
      .then(response => {
        res.status(201).json(response);
      })
      .catch(err => {
        res.status(500).json({
          info: 'There was an error adding the string to the database.',
          error: err,
        });
      });
  }
});

module.exports = router;
