const totalImages = 86;
const randomIndex = Math.floor(Math.random() * totalImages) + 1;
const randomImage = `imagen${randomIndex}.jpeg`;

document.getElementById('random-image').src = randomImage;
