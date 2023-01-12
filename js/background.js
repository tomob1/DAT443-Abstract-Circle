var images = document.querySelectorAll("img[src^='/assets/backgrounds/']");
var randomIndex = Math.floor(Math.random() * images.length);
var randomImage = images[randomIndex];
document.body.style.backgroundImage = "url('" + randomImage.src + "')";
