//Enquiry form
function changeText(){
    var name = document.getElementById("enquiry-form").fname.value;
    var welcome="Thanks for submitting " + name + "!";
    document.getElementById("enquiry-text").innerHTML = `<p class="form-submitted mt-5">Thank you for submitting your enquiry ${name}!<br>We will get back to you shortly on the email you provided!</p>`;
}





//Dark mode
var darkStatus = localStorage.getItem("darkMode"); //Retrieves any previous dark mode data from localStorage when visiting a new page.
darkStatus = JSON.parse(darkStatus);



if (darkStatus === true){ //checks if the user has previously had dark mode enabled. if true, it will be re-anabled.
    document.getElementById("body").classList.toggle("content-dark");
    document.getElementById("main-nav").classList.toggle("navbar-dark");
    document.getElementById("main-nav").classList.toggle("bg-dark");
    document.getElementById("nav-dropdown").classList.toggle("nav-dropdown-dark");
    document.getElementById("dropdown-hr").classList.toggle("text-white");
    document.getElementById("title").classList.toggle("title-dark");
    document.getElementById("main-content").classList.toggle("content-dark");
    document.getElementById("footer").classList.toggle("footer-dark");
    document.getElementById("facebook-logo").src="images/facebook_inverted.png";
    document.getElementById("twitter-logo").src="images/twitter_inverted.png";



    
    var currentPage = window.location.pathname.split("/").pop(); //Checks if the pages are correct for these page specific elements.

    if (currentPage === "menus.html"){
        var cards = document.getElementsByClassName("card");
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.toggle("card-dark");
        }
    }
    if (currentPage === "menus.html" || currentPage === "breakfasts.html" || currentPage === "burgers_chips_jackets.html" || currentPage === "cold_fillings_salads.html" || currentPage === "paninis_wraps_roasts.html"){
        document.getElementById("current-dropdown").classList.toggle("dropdown-current-page-dark");
    }
}



function toggleDark(){ //This function is excecuted when the user clicks the dark mode button.
    document.getElementById("body").classList.toggle("content-dark");
    document.getElementById("main-nav").classList.toggle("navbar-dark");
    document.getElementById("main-nav").classList.toggle("bg-dark");
    document.getElementById("nav-dropdown").classList.toggle("nav-dropdown-dark");
    document.getElementById("dropdown-hr").classList.toggle("text-white");
    document.getElementById("title").classList.toggle("title-dark");
    document.getElementById("main-content").classList.toggle("content-dark");
    document.getElementById("footer").classList.toggle("footer-dark");



    var currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "menus.html"){
        var cards = document.getElementsByClassName("card");
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.toggle("card-dark");
        }
    }
    if (currentPage === "menus.html" || currentPage === "breakfasts.html" || currentPage === "burgers_chips_jackets.html" || currentPage === "cold_fillings_salads.html" || currentPage === "paninis_wraps_roasts.html"){
        document.getElementById("current-dropdown").classList.toggle("dropdown-current-page-dark");
    }



    if (darkStatus === true){ //This keeps track and stores whether dark mode is enabled or not.
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