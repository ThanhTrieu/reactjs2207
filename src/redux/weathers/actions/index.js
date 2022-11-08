//action se di vao middle redux saga
export const SEARCH_WEATHER = 'SEARCH_WEATHER';
export const searchWeatherByCity = (city) => ({
    type: SEARCH_WEATHER,
    city
});

// cac action cua redux saga xu ly (day la cac action se dc dispatch vao store)
export const START_SEARCH = 'START_SEARCH';
export const startSearchWeather = (loading) => ({
    type: START_SEARCH,
    loading
});
export const FINISH_SEARCH = 'FINISH_SEARCH';
export const finishSearchWeather = (finish) => ({
    type: FINISH_SEARCH,
    finish
});

export const SEARCH_DATA_SUCCESS = 'SEARCH_DATA_SUCCESS';
export const searchWeatherSuccess = (dataWeather) => ({
    type: SEARCH_DATA_SUCCESS,
    dataWeather
});

export const SEARCH_DATA_FAILED = 'SEARCH_DATA_FAILED';
export const searchWeatherFailed = (error) => ({
    type: SEARCH_DATA_FAILED,
    error
})