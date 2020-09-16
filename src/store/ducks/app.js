import AppService from '../../service/app.service';
import Store from '../../store/index';

const appService = new AppService();

export const Types = {
  FETCH_DATA: 'FETCH_DATA',
  FETCH_FAILED: 'FETCH_FAILED',
  FETCH_DATA_SUCCESS: 'FECTCH_DATA_SUCCESS'
};

const initialState = {
  person: {
    theme: appService.themes.DARK,
    name: 'Luka',
    avatar: null
  },
  success: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_DATA_SUCCESS:
      return { ...state, person: action.payload.person, success: true };
    case Types.FETCH_FAILED:
      return { ...state, success: false };  
    default:
      return state;
  }
}

export const Dispatchers = {
  fetchFailed: () => Store.dispatch({
    type: Types.FETCH_FAILED,
    payload: {},
  }),
  setDataRequest: (dataPerson) => Store.dispatch({
    type: Types.FETCH_DATA_SUCCESS,
    payload: {
      person: dataPerson
    },
  }),
  fetchData: () => Store.dispatch({
    type: Types.FETCH_DATA,
    payload: {}
  })
};
