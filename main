
const questions = require('./questions').questions;

const express = require('express');
const app = express();

app.get('/questions', (request, response) => {
    console.log('fh')
    response.send(questions);
});



app.listen(3000, function () {
    console.info(`Server is running at port 3000`);
});
