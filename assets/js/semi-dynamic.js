const getWorldTotal = async () => {

  //about section

  const responseAbout = await fetch('https://script.google.com/macros/s/AKfycbyGvojp45AwMa5ovpBjTm0QGtS5TZmVkw41r_sOhCQiV3MyoAXNhCPwQNJQHwhMQ_BH6A/exec?worker=getData&type=horizontal&sheet=Details');
  const dataAbout = await responseAbout.json();
  console.log(dataAbout.about);
  document.querySelector('.bold-text p').innerHTML = dataAbout.about; 

  //Header section starts

  const responseHeader = await fetch('https://script.google.com/macros/s/AKfycbyGvojp45AwMa5ovpBjTm0QGtS5TZmVkw41r_sOhCQiV3MyoAXNhCPwQNJQHwhMQ_BH6A/exec?worker=getData&type=vertical&sheet=Header');
  const dataHeader = await responseHeader.json();
  console.log(dataHeader[1].showName);
  // console.log(dataHeader[1].showName);
  // console.log(dataHeader[0].link);

//home 

  document.querySelector('nav #navHome a').innerHTML = dataHeader[0].showName; 
  document.querySelector('nav #navHome a').setAttribute('href',dataHeader[0].link);

  //research

  document.querySelector('nav #navResearch a').innerHTML = dataHeader[1].showName; 
  document.querySelector('nav #navResearch a').setAttribute('href',dataHeader[1].link);

  //teams

  document.querySelector('nav #navEvents a').innerHTML = dataHeader[2].showName; 
  document.querySelector('nav #navEvents a').setAttribute('href',dataHeader[2].link);

  //Grants

  document.querySelector('nav #navGrants a').innerHTML = dataHeader[3].showName; 
  document.querySelector('nav #navGrants a').setAttribute('href',dataHeader[3].link);

  //Events

  document.querySelector('nav #navEvents a').innerHTML = dataHeader[4].showName; 
  document.querySelector('nav #navEvents a').setAttribute('href',dataHeader[4].link);

  //Contact
 
  document.querySelector('nav #navContact a').innerHTML = dataHeader[5].showName; 
  document.querySelector('nav #navContact a').setAttribute('href',dataHeader[5].link);

  // header ends

  //footer section starts

  const responseFooter = await fetch('https://script.google.com/macros/s/AKfycbyGvojp45AwMa5ovpBjTm0QGtS5TZmVkw41r_sOhCQiV3MyoAXNhCPwQNJQHwhMQ_BH6A/exec?worker=getData&type=raw&sheet=Footer');
  const dataFooter = await responseFooter.json();
  console.log(dataFooter[8][0]);

  //Events

  document.querySelector('footer .events h4').innerHTML = dataFooter[2][0]; 
  //event link

  // document.querySelector('footer .widget-title h4').innerHTML = dataFooter[2][1]; 

  //address
  document.querySelector('footer .text #footerAddress').innerHTML = '<i class="icon-26"></i>'+dataAbout.address; 

  //phone
  document.querySelector('footer .text #footerPhone').innerHTML = '<i class="icon-24"></i>'+"Call Us :"+dataAbout.phone; 

  //email
  document.querySelector('footer .text #footerMail').innerHTML = '<i class="icon-25"></i>'+dataAbout.email; 

  //useful link

  document.querySelector('footer .useful-link h4').innerHTML=dataFooter[8][0];

 document.querySelector('footer #footer-about').innerHTML=dataFooter[9][0];
 document.querySelector('footer #footer-about').setAttribute('href',dataFooter[9][1]);

  document.querySelector('footer #footer-research').innerText=dataFooter[10][0];
 document.querySelector('footer #footer-research').setAttribute('href',dataFooter[10][1]);

 document.querySelector('footer #footer-Grants').innerText=dataFooter[11][0];
 document.querySelector('footer #footer-Grants').setAttribute('href',dataFooter[11][1]);

 document.querySelector('footer #footer-contact').innerText=dataFooter[12][0];
 document.querySelector('footer #footer-contact').setAttribute('href',dataFooter[12][1]);


 //footer section ends


//team section starts

//team-element-2 page
 const responseTeam = await fetch('https://script.google.com/macros/s/AKfycbyGvojp45AwMa5ovpBjTm0QGtS5TZmVkw41r_sOhCQiV3MyoAXNhCPwQNJQHwhMQ_BH6A/exec?worker=getData&type=vertical&sheet=Team');
const dataTeam = await responseTeam.json();
console.log(dataTeam[2].name);

document.querySelector('.team-section  .lower-content h4').innerHTML=dataTeam[2].name;





//team section ends



};

  getWorldTotal();

  //about page
 
	