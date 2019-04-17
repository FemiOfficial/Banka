const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to Banka App REST API');
});

module.exports = router;