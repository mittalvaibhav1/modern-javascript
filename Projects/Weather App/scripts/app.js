const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

const updateUI = (data) => {
    const {cityDets , weather} = data;

    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-5 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `
    
    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg' ;
    time.setAttribute("src",timeSrc);
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute("src",iconSrc);
}

cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    forecast.updateCity(city)
    .then(data => {
        console.log(data);
        updateUI(data);
    })
    .catch(error => console.log(error.message));

    //Adding city to  Local Storage
    localStorage.setItem('city',city);
})

if(localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
    .then(data => {
        console.log(data);
        updateUI(data);
    })
    .catch(error => console.log(error.message));
}


// const upDateCity = async (city) => {

//     const cityDets = await getCity(city);
//     const weather = await getWeather(cityDets.Key);

//     return {
//         cityDets: cityDets,
//         weather: weather
//     }
// }