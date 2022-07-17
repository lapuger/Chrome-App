const API_KEY = "201debf0812a0f8d2d904746284c84f4";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=metric`;

    // url 수정하려면 경로 마지막에 &unit=metric 추가해 탐색
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector(".weather span:first-child");
        const city = document.querySelector(".weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}`;

    }); //fetch = promise 

}
function onGeoError() {
    alert("Cant find you, No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);