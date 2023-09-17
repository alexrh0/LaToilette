const images = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg',
    // Agrega más nombres de archivo de tus imágenes aquí
];

const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];

document.getElementById('random-image').src = randomImage;
