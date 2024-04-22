
const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
  res.json({
    id: 0,
    name: 'chocolate',
    price: 0.08
  })
})

module.exports = router
