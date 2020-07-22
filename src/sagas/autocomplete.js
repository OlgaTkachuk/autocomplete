import {all, takeLatest, call, put} from 'redux-saga/effects';

import {getDataFromApi} from '../utils/Client';
import {GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESS} from "../redux/types";

// Get DATA
export function* getData() {
    try {
        const response = yield call(getDataFromApi);
        yield put({
            type: GET_DATA_SUCCESS,
            payload: response,
        });
    } catch (err) {
        yield put({
            type: GET_DATA_FAILURE,
            payload: err.response,
        });

    }
}

export default function* root() {
    yield all([takeLatest(GET_DATA, getData)]);
}
