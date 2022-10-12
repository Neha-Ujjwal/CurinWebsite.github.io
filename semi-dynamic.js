const getWorldTotal = async () => {const response = await fetch('https://script.google.com/macros/s/AKfycbwSqQmJsIdflKGaSVIRItVfHJClMmiDvH9OPPSRPuRWuS2gQ6kB47u9v-G_ANVuISLTTQ/exec');
const worldTotal = await response.json();
console.log(worldTotal.content[0][1])
document.getElementById('total').innerText = worldTotal.content[0][1];};

//calling function

getWorldTotal()
      
	