import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../services/api';
import * as actions from '../actions/index';

// redux saga thi chi duoc phep trien khai bang generator function
export function* searchWeatherSaga(payload){
    // worker 
    // xu ly hanh dong gi no (xuat phat tu action dc di qua middleware redux saga)
    try {
        const nameCity = payload.city;
        // bao hieu bat dau call data
        // dispacth action cua saga vao store
        yield put(actions.startSearchWeather(true));
        // call api
        const data = yield call(api.getDataWeatherByCityName, nameCity);
        if(data.hasOwnProperty('list')){
            // co data -thanh cong
            yield put(actions.searchWeatherSuccess(data.list))
        } else {
            // khong co du lieu
            yield put(actions.searchWeatherFailed({
                cod: 404,
                mess: `Not found data by keword : ${nameCity}` 
            }))
        }
    } catch(e){
        // bi loi
        yield put(actions.searchWeatherFailed({
            cod: 500,
            mess: e 
        }))
    } finally {
        yield put(actions.finishSearchWeather(true));
    }
}

// watcher : theo doi khi nao action dc di qua middleware saga
export function* watchSearchSaga(){
    yield takeLatest(actions.SEARCH_WEATHER, searchWeatherSaga);
}