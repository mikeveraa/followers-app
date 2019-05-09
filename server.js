
const express = require('express');
const app = express();
const app = express();
app.use(express.static(__dirname + '/cobahosting'));

// app.all('*', (req, res) => {
//   res.status(200).sendFile(__dirname + '/dist/index.html');
// });
app.use(express.static(__dirname + '/cobahosting'));
app.get('/*', function(req,res){
  res.sendFile(path.join(__dirname + 'cobahosting/index.hrml'));
});
app.listen(process.env.PORT || 8080);