const openButton = document.querySelector("#openOverlay");
const successModal = createModal("Hello Arseniy");


openButton.addEventListener("click", event => { 
  document.body.appendChild(successModal);
});

function createModal(content) {


  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");
  

  const containerElement = document.createElement('div');
  containerElement.classList.add("modal-container");
  overlayElement.appendChild(containerElement);


  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  containerElement.appendChild(contentElement);

  contentElement.innerHTML = content;


  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";
  containerElement.appendChild(closeElement);


  closeElement.addEventListener("click", event => {
    event.preventDefault();
    document.body.removeChild(overlayElement);

  });



  overlayElement.addEventListener("click", event => {
    if (!event.target.classList.contains("content")) {
      closeElement.click();
    }
    //   if (event.target == overlayElement) {
    //    closeElement.click();
    //   }

   

  });

 return overlayElement;

}