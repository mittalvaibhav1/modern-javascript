class Forecast {
    constructor() {
        this.key = 'wEjT789qThjGyepa8cOw6f5ZKTwvZtqG'; 
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return {
            cityDets: cityDets,
            weather: weather
        }
    }
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        if(!response.ok) throw new Error('Unable to fetch data: ' + response.status + " " + response.statusText);
        const data  = await response.json();
        return data[0];
    }
    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        if(!response.ok) throw new Error(response.status + " " + response.statusText);
        const data = await response.json();
        return data[0];
    }
}

// let key = 'ENTER_YOUR_KEY';
// key = 'wEjT789qThjGyepa8cOw6f5ZKTwvZtqG';

// const getCity = async (city) => {
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;
//     const response = await fetch(base + query);
//     if(!response.ok) throw new Error('Unable to fetch data: ' + response.status + " " + response.statusText);
//     const data  = await response.json();
//     return data[0];
// }

//getCity('manchester')
// .then(response => getWeather(response.Key))
// .then(response => console.log(response))
// .catch(error => console.log(error));


// const getWeather = async(id) => {
//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${id}?apikey=${key}`;
//     const response = await fetch(base + query);
//     if(!response.ok) throw new Error(response.status + " " + response.statusText);
//     const data = await response.json();
//     return data[0];
// }