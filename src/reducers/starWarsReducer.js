import {FETCHING_START, FETCHING_SUCCESS, FETCHING_FAIL} from "../actions";
const initialState = {
  characters: [],
  isFetching: false,
  err: ''
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        isFetching: true,
        err: ''
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        err: ''
      };
    case FETCHING_FAIL:
      return {
        ...state,
        isFetching: false,
        err: action.payload
      };
    default:
      return state;
  }
};
