const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/posts', (req, res) => { 
  res.json([{ "id": 1, "title": "json-server", "author": "typicode" }]) 
});

router.get('/posts/:id', (req, res) => { 
  res.json({ "id": 1, "title": "json-server", "author": "typicode" }) 
});

module.exports = router;
