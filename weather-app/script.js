const apiKey = "cb52aa8c5b73c84c54162c2733ca15f3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcons = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        var data = await response.json();
    
        // console.log(data);
    
        let cityName = document.querySelector('.city');
        let temprature = document.querySelector('.temp');
        let humidity = document.querySelector('.humidity');
        let wind = document.querySelector('.wind');
    
        cityName.innerHTML = data.name;
        temprature.innerHTML = Math.round(data.main.temp) + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " kmph";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcons.src = "images/clouds.png"
        } else if(data.weather[0].main == "Clear"){
            weatherIcons.src = "images/clear.png"
        } else if(data.weather[0].main == "Rain"){
            weatherIcons.src = "images/rain.png"
        } else if(data.weather[0].main == "Drizzle"){
            weatherIcons.src = "images/drizzle.png"
        } else if(data.weather[0].main == "Mist"){
            weatherIcons.src = "images/mist.png"
        }
    
        let weather = document.querySelector(".weather");
        weather.style.display = "block";

        document.querySelector(".error").style.display = "none";

    }


}

searchBtn.addEventListener('click' , () => {
    checkWeather(searchBox.value);
})



// to get api
// open weather map


// api
// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=cb52aa8c5b73c84c54162c2733ca15f3&units=metric