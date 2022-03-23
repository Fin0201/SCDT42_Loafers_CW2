function changeText(){
    var name = document.getElementById("welcome-form").fname.value;
    var welcome="Thank you for submitting " + name + "!";
    document.getElementById("welcome-text").innerHTML = welcome;
}

//weather api


//enable/disable css class for sdark mode
var darkToggle;




toggleDark = localStorage.getItem("darkMode");



if (localStorage.getItem("darkMode") === true){
    console.log("light")
}
else{
    localStorage.setItem("darkMode", false)
    console.log("dark")
}




function toggleDark(){
    if (darkToggle === true){
        darkToggle = true;
        localStorage.setItem("darkMode", false);


        console.log(localStorage.getItem("darkMode"));
    }
    else{
        darkToggle = true
        localStorage.setItem("darkMode", true)
        console.log(localStorage.getItem("darkMode"));
    }
}