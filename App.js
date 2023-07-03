const apikey = "57f8cec7f5ae67af2b622e8d80baaa94"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
let weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`)
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{

        var data = await response.json();
      
    
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"
    
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
            
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
            
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
            
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
            
        }
        else if (data.weather[0].main == "Haze") {
            weatherIcon.src = "images/haze.png"
            
        }
         document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }
}

searchbtn.addEventListener("click", ()=>{
    
    checkWeather(searchBox.value)
})
// document.addEventListener("keydown", (key)=>{
//     key.preventDefault()
//     console.log(key);
//     if (key == "Enter") {
//         console.log("hi");
// }
// })