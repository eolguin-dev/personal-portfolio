console.log('server working...');
const express = require('express');
const app = express()
const path = require('path');

//Changes starts here (live reload)

var livereload = require('livereload');
var connectLiveReload = require('connect-livereload');

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

app.use(connectLiveReload());

//Changes until here

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares

//routes
app.use(require('./routes/index'));

//static files

app.use(express.static(path.join(__dirname, 'public')));

// listening the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));

});
