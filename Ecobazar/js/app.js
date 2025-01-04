let smSearchIcon = document.querySelector(".searchIcon")
let smSearchBox = document.querySelector(".searchBox")
let smSearchBoxBtn = document.querySelector(".clsBtn")
function smSearchAdd() {
    smSearchBox.classList.add("active")
}
function smSearchRmv() {
    smSearchBox.classList.remove("active")
}
smSearchIcon.addEventListener('click', smSearchAdd)
smSearchBoxBtn.addEventListener('click', smSearchRmv)



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
      },
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar

    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });


  var mixer = mixitup('.mixer-all');


  var header = document.getElementById("myDIV");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active2");
    current[0].className = current[0].className.replace(" active2", "");
    this.className += " active2";
    });
  }