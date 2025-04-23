
let activeImageIndex = 1;
const totalImages = 5;

function setActiveImage(index) {
    activeImageIndex = index;
    const activeImage = document.querySelector("#prawy img");
    activeImage.src = `${index}.jpg`;
}

function nextImage() {
    activeImageIndex = activeImageIndex % totalImages + 1;
    setActiveImage(activeImageIndex);
}
function prevImage() {
    activeImageIndex = (activeImageIndex - 2 + totalImages) % totalImages + 1;
    setActiveImage(activeImageIndex);
}

function onThumbnailClick(event) {
    const clickedImageSrc = event.target.src;
    const clickedImageIndex = parseInt(clickedImageSrc.match(/(\d+)\.jpg$/)[1]);
    setActiveImage(clickedImageIndex);
}

document.querySelector("button:nth-of-type(1)").addEventListener("click", prevImage);
document.querySelector("button:nth-of-type(2)").addEventListener("click", nextImage);

document.querySelectorAll(".miniatury img").forEach((thumbnail) => {
    thumbnail.addEventListener("click", onThumbnailClick);
});
