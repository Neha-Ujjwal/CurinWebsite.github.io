//imports
const express = require('express');
const app = express();
const port=3000;


//static File
app.use(express.static('assets'));
app.use('/css', express.static(__dirname + 'assets/css'));
app.use('/images', express.static(__dirname + 'assets/images'));
app.use('/js', express.static(__dirname + 'assets/js'));
app.use('/fonts', express.static(__dirname + 'fonts/js'));

//set Views
app.set('website_new','./website_new');
app.set('view engine','ejs');


app.get('',(req,res)=>{
	res.render('index',{text:'home page!!!!'});
});

app.get('/about',(req,res)=>{
	res.render('about',{text:'about page'});
});

app.get('/contact',(req,res)=>{
	res.render('contact',{text:'contact page'});
});

app.get('/gallery',(req,res)=>{
	res.render('gallery',{text:'gallery page'});
});

app.get('/projects',(req,res)=>{
	res.render('projects',{text:'projects page'});
});

app.get('/publication',(req,res)=>{
	res.render('publication',{text:'publication page'});
});




//listen on port 3000
app.listen(port,()=>console.info('listening on port 3000'));