let express = require('express');
let router = express.Router();
let nodeFetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  let users = nodeFetch('http://localhost:1337/users')
    .then((data) => {
      if (data.status !== 200){
        return null;
      }
      return data.json();
    })
    .then((data) => {
      res.render('index', {
        title: 'Front End Component of strapi-starter-to-customize',
        users: data
      });
    });
});

module.exports = router;
