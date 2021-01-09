const API_KEY = "LK7XdZBjwqpG84xUF8a60gHhS5mzg6Lj";
const base_URL = "http://dataservice.accuweather.com/";

const getURLCity = cityName => {
    return `${base_URL}locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`
}

const getWeatherURL = cityKey =>
`${base_URL}currentconditions/v1/${cityKey}?apikey=${API_KEY}&language=pt-br`;

const fetchData = async url => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Não foi possível obter os dados")
        }

        return response.json();
    } catch ({ name, message }) {
        alert(`${name}: ${message}`);
    }
}

const getCityData =  cityName => fetchData(getURLCity(cityName))
const getCityWeather = cityKey => fetchData(getWeatherURL(cityKey));



