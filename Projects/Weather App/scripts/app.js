const cityForm = document.querySelector('form');

const upDateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {
        cityDets: cityDets,
        weather: weather
    }
}
cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    upDateCity(city)
    .then(data => {

    })
    .catch(error => console.log(error.message));

    
})