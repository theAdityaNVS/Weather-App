const key = 'Xt86UdSZGkv8iubqOS9wepB2S1ANRMYt';

const getWeather = async (id) => {
    const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const queryURL = `${id}?apikey=${key}`;
    const response = await fetch(baseURL+queryURL);
    
    const data = await response.json();
    // console.log(data[0]);
    return data[0];
}

const getCity = async (city) => {
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const queryURL = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseURL+queryURL);

    const data = await response.json();
    // console.log(data[0]);
    return data[0];
};

// getCity('visakhapatnam')
//     .then(data => getWeather(data.Key))
//     .then(data => console.log(data))
//     .catch(err => {console.log(err)});