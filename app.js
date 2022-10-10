// Importing modules
const express = require('express');
const path = require('path');
const app = express();
// Specific folder example
app.use(express.static('assets'));
app.use('/css', express.static(__dirname + 'assets/css'));
app.use('/images', express.static(__dirname + 'assets/images'));
app.use('/js', express.static(__dirname + 'assets/js'));
app.use('/fonts', express.static(__dirname + 'fonts/js'));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});
  
// app.get('/products', (req, res) => {
//   res.sendFile(path.join(__dirname, '/public/products.html'));
// });
  
app.listen(80, () => {
  console.log('Server is up on port 3000');
});
