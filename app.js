const express = require('express');
const config = require('./config').config;

const app = express();
const service = require('./service');

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.send('Serwer działa!');

})


app.listen(config.port, function () {
    console.log(config.port)
    console.info(`Server is running at port 3000`);
});



app.get('/index', (request, response) => {
    response.render(__dirname + '/index.html', {subject: 'Technologie webowe w aplikacjach Internetu'}
    )

});

