let key = 'ENTER_YOUR_KEY';
key = 'wEjT789qThjGyepa8cOw6f5ZKTwvZtqG';

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    if(!response.ok) throw new Error('Unable to fetch data: ' + response.status + " " + response.statusText);
    const data  = await response.json();
    return data[0];
}

//getCity('manchester')
// .then(response => getWeather(response.Key))
// .then(response => console.log(response))
// .catch(error => console.log(error));


const getWeather = async(id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    if(!response.ok) throw new Error(response.status + " " + response.statusText);
    const data = await response.json();
    return data[0];
}