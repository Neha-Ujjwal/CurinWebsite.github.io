const getWorldTotal = async () => {

const responseTeam = await fetch('https://script.google.com/macros/s/AKfycbyGvojp45AwMa5ovpBjTm0QGtS5TZmVkw41r_sOhCQiV3MyoAXNhCPwQNJQHwhMQ_BH6A/exec?worker=getData&type=vertical&sheet=Team');
const dataTeam = await responseTeam.json();
console.log(dataTeam[2].image);

// const peopleObjects = dataTeam
// .map(([team,image,name,contact,description,position,employee]) => ({ team,image,name,contact,description,position,employee }));

// console.log(dataTeam);
//labTrainee1

// document.querySelector('.team-section .labTrainee1 .lower-content h4').innerHTML=dataTeam[2].name;
// // document.querySelector('.team-section .labTrainee1 img').setAttribute('src',dataTeam[2].image);

// //labTrainee2


// document.querySelector('.team-section .labTrainee2 .lower-content h4').innerHTML=dataTeam[3].name;
// // document.querySelector('.team-section .labTrainee2 img').setAttribute('src',dataTeam[3].image);

// //labTrainee3

// document.querySelector('.team-section .labTrainee3 .lower-content h4').innerHTML=dataTeam[4].name;
// // document.querySelector('.team-section .labTrainee2 img').setAttribute('src',dataTeam[3].image);



};


getWorldTotal();