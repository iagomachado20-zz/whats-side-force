import AppService from '../../service/app.service';
import Store from '../../store/index';

const appService = new AppService();

export const Types = {
  FETCH_DATA: 'FETCH_DATA',
  FETCH_FAILED: 'FETCH_FAILED',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS'
};

const initialState = {
  loading: false,
  person: {
    theme: appService.themes.DARK,
    name: null,
    avatar: null
  },
  success: null
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_DATA_SUCCESS:
      return { person: action.payload.person, success: true, loading: false };
    case Types.FETCH_FAILED:
      return { ...state, success: false };
    case Types.FETCH_DATA:
      return { ...state, loading: action.payload.loading };    
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
    }
  }),
  fetchData: () => Store.dispatch({
    type: Types.FETCH_DATA,
    payload: {
      loading: true
    }
  })
};
