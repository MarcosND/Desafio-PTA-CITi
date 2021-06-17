let buttom = window.document.querySelectorAll('buttom');
let searchbar = window.document.getElementsByClassName('search-bar');
let header = window.document.getElementById('header');
let footer = window.document.querySelector('footer');
let searchinput = window.document.getElementsByClassName('search-input-mobile')
let searchbarimg = window.document.getElementsByClassName('search-icon')
let active = "null";
const searchtext = window.document.getElementsByName('filter')
const items = window.document.getElementsByName('picole')

const handleClickBlue = () => {

    header.style.background="linear-gradient(180deg, rgba(81, 111, 251, 0.8) 44.17%, rgba(255, 255, 255, 0.12) 100%)"
    footer.style.background="rgba(81, 111, 251, 0.56)"
    console.log(header)
    header.classList.add("test")
    active = "blue-img";
    startAnimation(active)
}

const handleClickPink = () => {
    header.style.background="linear-gradient(180deg, #FF99C4 44.17%, rgba(255, 255, 255, 0.12) 100%)"
    footer.style.background="rgba(244, 155, 140, 0.56)"
    active = "pink-img";
    startAnimation(active)
}

const handleClickOrange = () => {
    header.style.background="linear-gradient(180deg, rgba(240, 94, 43, 0.8) 44.17%, rgba(255, 255, 255, 0.12) 100%)"
    footer.style.background="rgba(240, 94, 43, 0.56)"
    active = "orange-img";
    startAnimation(active)
}

const handleClickSearchBar = () => {
    searchbar[0].classList.remove("search-bar-schrink")
    searchbar[0].classList.add("search-bar-animation");
    searchinput[0].classList.add("show")
    searchbarimg[0].style.paddingRight="2vw"
}

const handleClickSearchInput = () =>{
    searchbar[0].classList.add("search-bar-schrink")
}

const handleKeyUp = (event) =>{
    const type = event.target.value.toLowerCase().replace(/\s+/g, '')
    items.forEach((item) =>{
        item.id.toLowerCase().startsWith(type)
        ? (item.style.display = "flex")
        : (item.style.display = "none")
    })
}

buttom[0].addEventListener("click", handleClickBlue);
buttom[1].addEventListener("click", handleClickPink);
buttom[2].addEventListener("click", handleClickOrange);
searchbar[0].addEventListener("click", handleClickSearchBar);
searchinput[0].addEventListener("focusout", handleClickSearchInput);
searchtext[0].addEventListener("keyup", handleKeyUp)
searchtext[1].addEventListener("keyup", handleKeyUp)
 
function startAnimation (state) {
    if (state === "blue-img"){
        reverseAnimation("pink-img")
        reverseAnimation("orange-img")
    }
    if (state === "pink-img"){
        reverseAnimation("orange-img")
        reverseAnimation("blue-img")
    }
    if (state === "orange-img"){
        reverseAnimation("blue-img")
        reverseAnimation("pink-img")
    }
    let id = null;
    const elem = document.getElementById(active);
    let pos = 2.5
    clearInterval(id);
    id = setInterval(frame, 50);
    function frame() {
      if (pos == 5.5) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.paddingBottom = pos + 'vh';
      }
    }
    }

function reverseAnimation (term) {
    let id = null;
    const elem = document.getElementById(term);
    let pos = 5.5
    clearInterval(id);
    id = setInterval(frame, 50);
    function frame() {
        if (pos == 2.5) {
        clearInterval(id);
        } else {
        pos--;
        elem.style.paddingBottom = pos + 'vh';
        }
    }
    }

