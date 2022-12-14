import axios from 'axios';

const getDataWeatherByCityName = async (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric&lang=vi`;
    const response = await axios.get(url);
    const result = response.status === 200 ? response.data : {};
    return result;
}

export const api = {
    getDataWeatherByCityName
}