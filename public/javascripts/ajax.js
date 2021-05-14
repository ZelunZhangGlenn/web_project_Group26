var button = document.getElementById("go_top");
// var image = document.getElementById("Haha"); //play
// var navbar = document.getElementsByClassName("mainbar");
// var okay = navbar.offsetTop;
// console.log(navbar);

window.onscroll = function(){
    scrolldown();
    // headFunction();
};

function scrolldown(){
    if(document.body.scrollTop>500 || document.documentElement.scrollTop > 500){
        button.style.display = "block";
    }else{
        button.style.display = "none";
    }
}

function gototop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function function_on_click_home(){
    // var main = document.getElementById("main");
    // var mainPage = document.getElementById("mainPage");
    // main.innerHTML = "";
    // mainPage.style.display = "block";

}





// Head bar //

// function headFunction() {
//     console.log("1");
//   if (window.pageYOffset >= okay) {
//     console.log("fuck111");
//     navbar.classList.add("test_bar");
//   } else {
//     navbar.classList.remove("test_bar");
//   }

// }


