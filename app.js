



// document.getElementById("character").addEventListener("touchstart", function() {
//   img_id = Math.floor(Math.random() * 16);
//   console.log("image id: ",img_id);
// }, false);


// document.getElementById("character").addEventListener("onClick", function() {
//   img_id = Math.floor(Math.random() * 16);
//   console.log("image id: ",img_id);
// }, false);

displayImage = () => {
    img_id = Math.floor(Math.random() * 16);
    document.getElementById("demo").innerHTML = "<img src='./images/"+img_id+".webp'  width='300' height='200'/>";
}

initImage = () => {
    img_id = Math.floor(Math.random() * 16);
    document.getElementById("demo").innerHTML = "<img src='./images/0.webp' />";
}

const elem = document.getElementById("root");
elem.addEventListener("click", displayImage)
elem.addEventListener("touchstart", displayImage)
elem.addEventListener("touchend", initImage)

