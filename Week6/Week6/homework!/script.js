document.getElementById("drawer").addEventListener("click", function(event) {
    document.getElementById("nav").style.left = "0px";
});

 document.getElementById("closeNav").addEventListener ("click", function(event) {
    let parent = document.getElementById("closeNav").offsetParent.id;
    document.getElementById(parent).style.left = "-600px"
    })


document.getElementById("modal").addEventListener("click", function(event){
    document.getElementsByClassName("modal")[0].style.display = "block"
})

document.getElementById("closeModal").addEventListener("click", function(event){
    document.getElementsByClassName("modal")[0].style.display = "none";
})


document.getElementById("accordian").addEventListener("click", function(event){
    document.getElementById("open").style.display = "block";
})

document.getElementById("close").addEventListener("click", function(event){
    document.getElementById(close).style.display = "none"
})


function yourName() {
  let person = prompt("What is your name?");
  if (person != null) {
    document.getElementById("name").innerHTML =
    "Hello " + person + "...";
  }
}