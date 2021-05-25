const cityInp = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {
    // const cityDetails = data.cityDetails;
    // const weatherDetails = data.weatherDetails;

    const {cityDetails, weatherDetails} = data;

    const html = `
        <h5 class="my-4">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weatherDetails.WeatherText}</div>
        <div class="display-5 my-3">
            <span>${weatherDetails.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `
    details.innerHTML = html;

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

const updateCity = async (city)=>{
    const cityDetails = await getCity(city);
    const weatherDetails = await getWeather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        weatherDetails: weatherDetails
    };
};

cityInp.addEventListener('submit', (e)=>{
    e.preventDefault();

    const city = cityInp.city.value.trim();
    cityInp.reset();

    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
})