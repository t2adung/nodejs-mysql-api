require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('_helpers/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello')
});

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4001;
app.listen(port, () => console.log('Server listening on port ' + port));