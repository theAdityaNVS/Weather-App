const cityInp = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const icon = document.querySelector('.icon');
const time = document.querySelector('.time'); 

const updateUI = (data) => {
    // const cityDetails = data.cityDetails;
    // const weatherDetails = data.weatherDetails;

    const {cityDetails, weatherDetails} = data;

    const html = `
        <h5 class="my-2">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weatherDetails.WeatherText}</div>
        <div class="display-5 mt-3 mb-5">
            <span>${weatherDetails.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `
    details.innerHTML = html;

    icon.innerHTML = `
        <img src="./img/icons/${weatherDetails.WeatherIcon}.svg">
    `;
    console.log(weatherDetails.IsDayTime)
    let timeSrc = (weatherDetails.IsDayTime) ? './img/day.svg' : './img/night.svg';

    time.setAttribute('src', timeSrc);

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