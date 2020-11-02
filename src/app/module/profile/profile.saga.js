import { call, put, takeEvery, select } from 'redux-saga/effects';
import { GET_MAIN_USER_FAIL, GET_MAIN_USER_SUCCESS, GET_MAIN_USER_REQUEST } from './profile.actions';
import { fetchMainUserData } from './profile.repo';

export function* profileSagas () {
    
    yield takeEvery(GET_MAIN_USER_REQUEST, function* (action) {
        try {
            yield put({type: 'SHOW_LOADING', payload: res});
            const res = yield call(fetchMainUserData,action.payload);
            yield put({type: GET_MAIN_USER_SUCCESS, payload: res});
        }
        catch (e) {
            console.error(e);
            yield put({type: GET_MAIN_USER_FAIL, payload: {message: e.message}});
        }
    });
}
