import { call, put, takeLatest } from 'redux-saga/effects';
import AppService from '../service/app.service';
import { Dispatchers, Types } from '../store/ducks/app';

const appService = new AppService();

function* loadData() {

  try {

    let result1 = yield call(() => appService.fetchData(1));
    let result2 = yield call(() => appService.fetchData(4));

    const resultRandom = appService.getPersonRandom([result1, result2]);

    appService.factoryThemeByPerson(resultRandom);

    yield put(Dispatchers.setDataRequest(resultRandom));

  } catch {

    yield put(Dispatchers.fetchFailed());

  }

}

function* rootSaga() {
  yield takeLatest(Types.FETCH_DATA, loadData);
}

export default rootSaga;