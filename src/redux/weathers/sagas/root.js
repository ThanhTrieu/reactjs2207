import { all, call } from 'redux-saga/effects';
import { watchSearchSaga } from './search';

export default function* rootSaga(){
    yield all([
        call(watchSearchSaga),
        // co saga khac thi goi ra chay
    ]);
}