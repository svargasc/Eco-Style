// Parallax
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.2 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 0.3 + 'px';
})

// Carousel

let images = Array.from(document.getElementsByClassName("imgCarousel"));

let mainPhoto = document.getElementById("mainPhoto");
let mainName = mainPhoto.getAttribute("name");
updateCaption(mainName);

images.forEach(function (image){
    image.addEventListener("click", updateImage);
})

function updateImage(event){
    let image = event.target;
    let name = image.getAttribute("name");

    mainPhoto.src = image.src;
    updateCaption(name);
}

function updateCaption(event){
    let caption = document.getElementById("caption");
    caption.innerHTML = event;
}