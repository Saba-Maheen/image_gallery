const images = document.querySelectorAll(".gallery-item");

let currentIndex = 0;

function openLightbox(img){

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src = img.src;

    currentIndex = [...images].indexOf(img);
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(step){

    currentIndex += step;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src =
        images[currentIndex].src;
}

function filterImages(category){

    images.forEach(image => {

        if(category === "all" ||
           image.classList.contains(category)){

            image.style.display = "block";
        }
        else{
            image.style.display = "none";
        }

    });
}