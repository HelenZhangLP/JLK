
const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("demonstration of routing level middleware");
  next();
})

router.get('/demo', (req, res) => {
  res.send('demonstration of routing level middleware')
})

module.exports = router
