const express = require('express');
// const port = process.env.PORT;
const port = 8080;
const app = express();
const router = express.Router();
const path = __dirname + '/views/';

app.use(express.static(__dirname));

router.get('/', function(req, res) {
    res.sendFile(path + 'index.html');
});

router.get('/projects', function(req, res) {
    res.sendFile(path + 'projects.html');
});

app.use('/', router);
app.listen(port);
