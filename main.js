

const overlay = document.querySelector(".overlay");
const dropdowns = document.querySelectorAll(".has-dropdown");

function openDropdown(drop) {
  closeAll();
  drop.classList.add("active");
  overlay.style.opacity = "1";
  overlay.style.pointerEvents = "auto";
}

function closeAll() {
  dropdowns.forEach(d => d.classList.remove("active"));
  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none";
}


dropdowns.forEach(drop => {
  const link = drop.querySelector("a");


  link.addEventListener("mouseenter", () => {
    if (window.innerWidth >= 992) {
      openDropdown(drop);
    }
  });

  drop.addEventListener("mouseleave", () => {
    if (window.innerWidth >= 992) {
      closeAll();
    }
  });


  link.addEventListener("click", e => {
    if (window.innerWidth < 992) {
      e.preventDefault();
      const isActive = drop.classList.contains("active");
      closeAll();
      if (!isActive) {
        openDropdown(drop);
      }
    }
  });
});


overlay.addEventListener("click", closeAll);
var mainDiv = document.getElementById('main-button');
mainDiv.addEventListener('click', function(){
  this.children.item(0).classList.toggle('fa-times');
  this.classList.toggle('open');
});
function downloadFiles() {
    const pdfLink = document.createElement('a');
    pdfLink.href = "files/Описательнаячасть(пример).pdf";  
    pdfLink.download = "Описательнаячасть(пример).pdf";     
    document.body.appendChild(pdfLink);
    pdfLink.click();
    document.body.removeChild(pdfLink);


    setTimeout(() => {
        const excelLink = document.createElement('a');
        excelLink.href = "files/Финансовая модель(пример).xlsm";  
        excelLink.download = "Финансовая модель(пример).xlsm";    
        document.body.appendChild(excelLink);
        excelLink.click();
        document.body.removeChild(excelLink);
    }, 1000); 
}
