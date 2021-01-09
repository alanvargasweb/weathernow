const cityForm = document.querySelector('[data-js="change-location"]');
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]');
const cityCard = document.querySelector('[data-js="city-card"]');
const timeIcon = document.querySelector('[data-js="time-icon"]');
let timeImg = document.querySelector('[data-js="time"]');

cityForm.addEventListener('submit', async event => {
    event.preventDefault();

    const inputValue = event.target.city.value;
    const [{ Key, LocalizedName }] = await getCityData(inputValue);
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon  }] = await getCityWeather(Key);
    const icon = `<img src='./src/icons/${WeatherIcon}.svg' />`;

    

    if(cityCard.classList.contains('d-none')) {
        cityCard.classList.remove('d-none');
    }

    if(IsDayTime) {
        timeImg.src = 'src/day.svg';
    } else {
        timeImg.src = 'src/night.svg';
    }
    
    timeIcon.innerHTML = icon;
    cityNameContainer.textContent = LocalizedName;
    cityTemperatureContainer.textContent = Temperature.Metric.Value;
    cityWeatherContainer.textContent = WeatherText;

    cityForm.reset()
})