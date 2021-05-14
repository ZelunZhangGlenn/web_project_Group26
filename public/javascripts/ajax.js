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
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var mainPart = document.getElementById("main");
            var homePage = document.getElementById("homePage");
            var news = document.getElementById("news_specfic_1");
            var vaccine = document.getElementById("vaccination");
            var banner = document.getElementById("banner");
            homePage.style.display = "block";
            news.style.display = "none";
            vaccine.style.display = "none";
            banner.style.display = "none";
        }
    };
    xhttp.open("get", "/home", true);
    xhttp.send();

}

function function_on_click_news_overall(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var mainPart = document.getElementById("main");
            var homePage = document.getElementById("homePage");
            var news = document.getElementById("news_specfic_1");
            var vaccine = document.getElementById("vaccination");
            var banner = document.getElementById("banner");
            homePage.style.display = "none";
            news.style.display = "block";
            vaccine.style.display = "none";
            banner.style.display = "none";
        }
    };
    xhttp.open("get", "/news", true);
    xhttp.send();

}

function function_on_click_WhatisCovid(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var mainPart = document.getElementById("main");
            var homePage = document.getElementById("homePage");
            var news = document.getElementById("news_specfic_1");
            var vaccine = document.getElementById("vaccination");
            var banner = document.getElementById("banner");
            homePage.style.display = "none";
            news.style.display = "none";
            vaccine.style.display = "block";
            banner.style.display = "none";
        }
    };
    xhttp.open("get", "/HealthTopics/WhatisCovid", true);
    xhttp.send();

}

function function_on_click_Vaccine(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var mainPart = document.getElementById("main");
            var homePage = document.getElementById("homePage");
            var news = document.getElementById("news_specfic_1");
            var vaccine = document.getElementById("vaccination");
            var banner = document.getElementById("banner");
            homePage.style.display = "none";
            news.style.display = "none";
            vaccine.style.display = "none";
            banner.style.display = "block";
        }
    };
    xhttp.open("get", "/HealthTopics/Vaccine", true);
    xhttp.send();

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


