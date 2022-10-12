// Set express as Node.js web application
// server framework.

// Install it using 'npm install express' command
// and require like this:
var data=[];
const getWorldTotal = async () => {
	const responseTeam = await fetch('https://script.google.com/macros/s/AKfycbyGvojp45AwMa5ovpBjTm0QGtS5TZmVkw41r_sOhCQiV3MyoAXNhCPwQNJQHwhMQ_BH6A/exec?worker=getData&type=raw&sheet=Team');
    const dataTeam = await responseTeam.json();
    // const result=JSON.parse(dataTeam);
    // console.log(dataTeam[2].image);
    // const leadershipTeam={}
    for(let i=0;i<dataTeam.length;i++){
    if(dataTeam[i][0]=='Leadership'){
    data.push(dataTeam[i]);
    }
    // console.log(dataTeam[i][0]);
}
};
var express = require('express');
var app = express();
	
// Set EJS as templating engine
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
res.render("home", {name:'Chris Martin'});
});
	
// Server setup
app.listen(3000, function(req, res) {
console.log("Connected on port:3000");
});
