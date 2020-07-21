import {all, fork} from 'redux-saga/effects';
import autocomplete from './autocomplete';


/**
 * rootSaga
 */
export default function* root() {
    yield all([
        fork(autocomplete),
    ]);
}
