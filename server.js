const { resolve } = require('path');
const express = require('express');

const app = express();

app.use('/', express.static(
    resolve(
        __dirname,
        './build'
    )
));

app.listen(
    process.env.PORT || 3000, 
    (err) => {
        if(err) return console.log('ERR on: ' + err);
        console.log('Listening...')
    }
);
