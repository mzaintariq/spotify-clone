import { takeLatest } from 'redux-saga/effects';
import { handleGetToken } from './handlers/auth';
import { GET_TOKEN } from '../actions';

export function* watcherSaga() {
    yield takeLatest(GET_TOKEN, handleGetToken)
}

