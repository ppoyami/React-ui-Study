import { useReducer } from 'react';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const LOADING = 'loading';
const SUCCESS = 'success';
const ERROR = 'error';

function reducer(state, action) {
  switch (action.type) {
    case LOADING:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case ERROR:
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      new Error(`${action.type} is not supported!`);
  }
}

export default function useAsync(callback) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (...args) => {
    dispatch({ type: LOADING });
    try {
      const data = await callback(...args);
      dispatch({ type: SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: ERROR, error: e });
    }
  };

  return [state, fetchData];
}
