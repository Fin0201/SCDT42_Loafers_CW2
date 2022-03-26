const APIKey = "842e529cd47863da2b0a026cf55a9d4b";
const shopLocation = "51.0140606,-3.1053471";

fetch("https://api.openweathermap.org/data/2.5/weather?lat=51.0140606&lon=-3.1053471&appid=842e529cd47863da2b0a026cf55a9d4b")
    .then (response => response.json())
    .then (data => {
        document.getElementById("weather-info").innerHTML=(`The current weather around the Loafers Sandwich Bar is:
        <p>${data.weather[0].main}</p>`);
        console.log(data)
})