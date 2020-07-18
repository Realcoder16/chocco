(function() {
 
const openContent = document.querySelector(".content");
const closeContent = document.querySelector(".content")
openContent.addEventListener("mouseover", e => {
  const reciept = document.querySelector(".whatinside");
  openContent.classList.add("content");

  if (!e.target.classList.contains("content")) {
    reciept.style.display = "block";
    e.preventDefault();
  }
  else {
    reciept.style.display = "none";
    e.preventDefault();
  }

});

})()