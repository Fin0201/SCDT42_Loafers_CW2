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
    console.log("it is dark, do dark things");
}

function toggleDark(){
    if (darkStatus === true){
        darkStatus = false;
        localStorage.setItem("darkMode", darkStatus);


        console.log(localStorage.getItem("darkMode"));
    }
    else{
        darkStatus = true;
        localStorage.setItem("darkMode", darkStatus);



        console.log(localStorage.getItem("darkMode"));
    }
}