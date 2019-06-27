const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send(
        [{
            'id':1,
            'image':'https://placeimg.com/64/64/1',
            'name':'이태호1',
            'birthday':'780907',
            'gender':'몰라',
            'job':'프로글래머',
          },
          {
            'id':2,
            'image':'https://placeimg.com/64/64/2',
            'name':'이태호2',
            'birthday':'780907',
            'gender':'몰라',
            'job':'프로글래머',
          },
          {
            'id':3,
            'image':'https://placeimg.com/64/64/3',
            'name':'이태호3',
            'birthday':'780907',
            'gender':'몰라',
            'job':'프로글래머',
          }
        ]
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));