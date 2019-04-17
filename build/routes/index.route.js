"use strict";

var express = require('express');

var router = express.Router();
router.get('/', function (req, res) {
  res.send('Welcome to Banka App REST API');
});
module.exports = router;
//# sourceMappingURL=index.route.js.map