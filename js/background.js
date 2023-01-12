var images = []; 
var imageFiles = fs.readdirSync("assets/backgrounds"); 

for (var i = 0; i < imageFiles.length; i++) { 
  images.push("assets/backgrounds" + imageFiles[i]); 
}

var randomNumber = Math.floor(Math.random() * images.length); 

document.body.style.backgroundImage = "url(" + images[randomNumber] + ")";
