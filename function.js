//document.getElementById("myVideo").loop = true;

const menu = document.querySelector('.menu')

//const navbar = document.querySelector('.navbar')
const nav_menu_drp = document.querySelector('.nav_menu_drp')
const menu_x = document.querySelector('.menu_x')


menu.addEventListener('click', () => {
    //navbar.classList.toggle('change')
    nav_menu_drp.classList.toggle('nav_menu_drp_vis'); 

    menu.classList.remove('menu')

    menu.classList.toggle('menu_hide')



   // menu_x.classList.toggle('menu_x_vis')


   

}

)





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






const textEl = document.getElementById('text-a')
const speedEl = document.getElementById("speed")

const text = 'FULL STACK DEVELOPMENT'

let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++


    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





$(document).ready(function () {
    if (!$.browser.webkit) {
        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
    }
});





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More . . .";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less ";
      moreText.style.display = "inline";
    }
  }


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function myFunction_x() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more_x");
    var btnText = document.getElementById("myBtn-x");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

