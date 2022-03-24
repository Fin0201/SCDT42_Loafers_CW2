//Enquiry form
function changeText(){
    var name = document.getElementById("welcome-form").fname.value;
    var welcome="Thank you for submitting " + name + "!";
    document.getElementById("welcome-text").innerHTML = welcome;
}

//do a weather api here later




//Dark mode
if (localStorage.getItem("darkMode") === null){
    localStorage.setItem("darkMode", false);
}

var darkStatus = localStorage.getItem("darkMode");
darkStatus = JSON.parse(darkStatus);

if (darkStatus === true){
    document.getElementById("body").classList.toggle("content-dark");
    document.getElementById("main-nav").classList.toggle("navbar-dark");
    document.getElementById("main-nav").classList.toggle("bg-dark");
    document.getElementById("nav-dropdown").classList.toggle("dropdown-current-page");
    document.getElementById("nav-dropdown").classList.toggle("nav-dropdown-dark");
    //document.getElementById("title").classList.toggle("title");
    document.getElementById("title").classList.toggle("title-dark");
    document.getElementById("main-content").classList.toggle("content-dark");
    document.getElementById("footer-spacing").classList.toggle("footer-spacing-dark");
    document.getElementById("footer").classList.toggle("footer-dark");
    document.getElementById("facebook-logo").src="images/facebook_inverted.png";
    document.getElementById("twitter-logo").src="images/twitter_inverted.png";

    if (window.location.href === "/menus" || window.location.href === "/breakfasts" || window.location.href === "/burgers_chips_jackets" || window.location.href === "/paninis_wraps_roasts" || window.location.href === "/cold_fillings_salads"){
        document.getElementById("current-dropdown").classList.toggle("dropdown-current-page-dark");
    }

    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.toggle("card-dark");
    }
}

function toggleDark(){
    document.getElementById("body").classList.toggle("content-dark");
    document.getElementById("main-nav").classList.toggle("navbar-dark");
    document.getElementById("main-nav").classList.toggle("bg-dark");
    document.getElementById("nav-dropdown").classList.toggle("dropdown-current-page");
    document.getElementById("nav-dropdown").classList.toggle("nav-dropdown-dark");
    //document.getElementById("title").classList.toggle("title");
    document.getElementById("title").classList.toggle("title-dark");
    document.getElementById("main-content").classList.toggle("content-dark");
    document.getElementById("footer-spacing").classList.toggle("footer-spacing-dark");
    document.getElementById("footer").classList.toggle("footer-dark");

    if (window.location.href === "/menus" || window.location.href === "/breakfasts" || window.location.href === "/burgers_chips_jackets" || window.location.href === "/paninis_wraps_roasts" || window.location.href === "/cold_fillings_salads"){
        document.getElementById("current-dropdown").classList.toggle("dropdown-current-page-dark");
    }

    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.toggle("card-dark");
    }
      


    if (darkStatus === true){
        darkStatus = false;
        localStorage.setItem("darkMode", darkStatus);
        document.getElementById("facebook-logo").src="images/facebook.png";
        document.getElementById("twitter-logo").src="images/twitter.png";
    }
    else{
        darkStatus = true;
        localStorage.setItem("darkMode", darkStatus);
        document.getElementById("facebook-logo").src="images/facebook_inverted.png";
        document.getElementById("twitter-logo").src="images/twitter_inverted.png";
    }
}