const input = document.querySelector('.cityN');
const button = document.querySelector(".searchBtn");
const weatherIcon = document.querySelector(".weather-icon");
const cityName = document.querySelector('.city-name');
const cityTemp = document.querySelector('.temp');
const feelL = document.querySelector('.feelslike');
const humidity = document.querySelector('.humidity');
const windS = document.querySelector('.wind');
const windDir = document.querySelector('.windDir');
const cloud = document.querySelector('.cloud');
const cityTime = document.querySelector('.time');
const uv = document.querySelector('.uv');
const timeZone = document.querySelector('.timeZone');
const co = document.querySelector('.co');
const gb = document.querySelector('.gb');
const no2 = document.querySelector('.no2');
const o3 = document.querySelector('.o3');
const pm2 = document.querySelector('.pm2');
const pm10 = document.querySelector('.pm10');
const so2 = document.querySelector('.so2');
const us = document.querySelector('.us');
const apiKey = "30ed6f1dddfe4e38b0c201226230211";

async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}


function getWeatherByLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=yes`;
            const result = await getData(url);
            displayWeatherData(result);
        }, (error) => {
            console.error('Error getting current location:', error);
            alert('Error getting your current location. Please enter a city name manually.');
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
        alert('Geolocation is not supported by your browser. Please enter a city name manually.');
    }
}


function displayWeatherData(result) {
    cityName.innerHTML = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerHTML = result.location.localtime;
    cityTemp.innerHTML = result.current.temp_c + " °C";
    feelL.innerHTML = result.current.feelslike_c + " °C";
    humidity.innerHTML = result.current.humidity;
    windS.innerHTML = result.current.wind_kph + " kph";
    windDir.innerHTML = result.current.wind_dir;
    cloud.innerHTML = result.current.condition.text;
    uv.innerHTML = result.current.uv;
    timeZone.innerHTML = `${result.location.tz_id}`;
    co.innerHTML = result.current.air_quality.co +" μm";
    gb.innerHTML = result.current.air_quality['gb-defra-index'] + "	μm";
    no2.innerHTML = result.current.air_quality.no2 +" μm";
    o3.innerHTML = result.current.air_quality.o3 +" μm";
    pm2.innerHTML = result.current.air_quality.pm2_5;
    pm10.innerHTML = result.current.air_quality.pm10 ;
    so2.innerHTML = result.current.air_quality.so2 +" μm";
    us.innerHTML = result.current.air_quality['us-epa-index'] ;
}


button.addEventListener('click', async () => {
    const value = input.value;
    if (value.trim() === "") {
        alert("Please enter a city name.");
        return;
    }
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}&aqi=yes`;
    const result = await getData(url);
    displayWeatherData(result);
});


window.addEventListener('load', () => {
    getWeatherByLocation();
});
 

function showWeatherForecast() {
    
    window.location.href = 'file:///C:/Users/visha/OneDrive/Desktop/W-A/Pro%20edit/PROJECT%202%20NEW/index.html'; 
}
   