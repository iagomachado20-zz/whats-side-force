import { call, put, takeLatest } from 'redux-saga/effects';
import AppService from '../service/app.service';
import { Dispatchers, Types } from '../store/ducks/app';

const appService = new AppService();

function* loadData(action) {

  try {

    const person = yield call(appService.fetchData());

    yield put(Dispatchers.setDataRequest(person));

  } catch {

    yield put(Dispatchers.fetchFailed());

  }

}

function* rootSaga() {
  yield takeLatest(Types.FETCH_DATA, loadData);
}

export default rootSaga;