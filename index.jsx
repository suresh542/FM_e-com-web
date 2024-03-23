

const color = {
    orange: "#FF884D",
}

const mainImageHere = document.getElementById("MainImage")
const imageSlide = document.getElementById("imageSlide")
const imageHere1 = document.createElement("img")
const imageHere2 = document.createElement("img")
const imageHere3 = document.createElement("img")
const imageHere4 = document.createElement("img")



const ProductImage = {
    img1: "./images/image-product-1.jpg",
    img2: "./images/image-product-2.jpg",
    img3: "./images/image-product-3.jpg",
    img4: "./images/image-product-4.jpg"
}
mainImageHere.src = ProductImage.img1



imageHere1.src = ProductImage.img1
imageHere2.src = ProductImage.img2
imageHere3.src = ProductImage.img3
imageHere4.src = ProductImage.img4
imageSlide.appendChild(imageHere1)
imageSlide.appendChild(imageHere2)
imageSlide.appendChild(imageHere3)
imageSlide.appendChild(imageHere4)

imageHere1.onclick = () => {
    if (imageHere1 === open) {
        mainImageHere.src = ProductImage.img1
    }
    else {
        mainImageHere.src = ProductImage.img1

    }
}
imageHere2.onclick = () => {
    if (imageHere2 === open) {
        mainImageHere.src = ProductImage.img2
    }
    else {
        mainImageHere.src = ProductImage.img2

    }
}
imageHere3.onclick = () => {
    if (imageHere3 === open) {
        mainImageHere.src = ProductImage.img3
    }
    else {
        mainImageHere.src = ProductImage.img3

    }
}
imageHere4.onclick = () => {
    if (imageHere4 === open) {
        mainImageHere.src = ProductImage.img4
    }
    else {
        mainImageHere.src = ProductImage.img4

    }
}

var increaseBtn = document.getElementById("increaseBtn")
var DecreaseBtn = document.getElementById("DecreaseBtn")
var count = document.getElementById("productCountNumber")
let counter = 0;


function countUpdate() {
    count.textContent = counter
}


increaseBtn.addEventListener('click', () => {
    counter++
    countUpdate();
})

DecreaseBtn.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        countUpdate();
    }

})

countUpdate();