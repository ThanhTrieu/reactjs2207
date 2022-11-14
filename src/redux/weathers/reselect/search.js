import { createSelector } from 'reselect';

const stateWeather = state => state.search;
// ly toan bo state trong reducer ra

const getListDataWeather = createSelector(
    stateWeather,
    item => item.dataWeather
); // ??????? array

export const getMainData = createSelector(
    getListDataWeather,
    dataItem => {
        // xu ly
        return dataItem.map((item) => ({
            main: item.main,
            dt_txt: item.dt_txt
        }))
    }
)
// lay state loading
export const getStateLoading = createSelector(
    stateWeather,
    item => item.loading
)
// lay state finish
export const getStateFinish = createSelector(
    stateWeather,
    item => item.finish
)
