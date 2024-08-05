
displayImage = () => {
    img_id = Math.floor(Math.random() * 16);
    document.getElementById("demo").innerHTML = "<img src='./images/"+img_id+".webp'  width='300' height='200'/>";
}

const elem = document.getElementById("root");
elem.addEventListener("click", displayImage)
elem.addEventListener("touchstart", displayImage)

