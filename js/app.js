const cityForm = document.querySelector('[data-js="change-location"]');
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]');
const cityCard = document.querySelector('[data-js="city-card"]');
const timeIcon = document.querySelector('[data-js="time-icon"]');
let timeImg = document.querySelector('[data-js="time"]');

const showCityCard = () => {
    if (cityCard.classList.contains('d-none')) {
       return cityCard.classList.remove('d-none');
    }
}

const showCityWeatherInfo = async (cityName) => {
    const [{ Key, LocalizedName }] = await getCityData(cityName);
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key);
    const icon = `<img src='./src/icons/${WeatherIcon}.svg' />`;

    timeImg.src = IsDayTime ? 'src/day.svg' : 'src/night.svg';
    timeIcon.innerHTML = icon;
    cityNameContainer.textContent = LocalizedName;
    cityTemperatureContainer.textContent = Temperature.Metric.Value;
    cityWeatherContainer.textContent = WeatherText;
}

cityForm.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = event.target.city.value;
    
    showCityCard();
    showCityWeatherInfo(inputValue);
   
    cityForm.reset()
})