const openContent = document.querySelector(".content");
openContent.addEventListener("click", e=>{
  const reciept = document.querySelector(".whatinside");
  
  reciept.style.display = "block";
  e.preventDefault();


});

