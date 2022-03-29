//Enquiry form
function changeText(){
    var name = document.getElementById("enquiry-form").fname.value;
    var welcome="Thanks for submitting " + name + "!";
    document.getElementById("enquiry-text").innerHTML = `<p class="form-submitted mt-5">Thank you for submitting your enquiry ${name}!<br>We will get back to you shortly on the email you provided us!</p>`;
}



//Weather API
const APIKey = "842e529cd47863da2b0a026cf55a9d4b";
const shopLocation = "51.0140606,-3.1053471";

fetch("https://api.openweathermap.org/data/2.5/weather?lat=51.0140606&lon=-3.1053471&appid=842e529cd47863da2b0a026cf55a9d4b")
    .then (response => response.json())
    .then (data => {
        document.getElementById("weather-info").innerHTML=`The current weather around the Loafers Sandwich Bar is:
        <p>${data.weather[0].main}</p>`;
})