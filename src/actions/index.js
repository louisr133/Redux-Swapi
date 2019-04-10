import axios from 'axios';

export const FETCHING_START = 'FETCHING_START'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_FAIL = 'FETCHING_FAIL'

export const getChars = () => dispatch => {
    dispatch({
      type: FETCHING_START
      
    });
  
    axios
      .get('https://swapi.co/api/people')
      .then(res => {
        dispatch({
          type: FETCHING_SUCCESS,
          payload: res.data.results
        });
      })
      .catch(err => {
        dispatch({
          type: FETCHING_FAIL,
          payload: err
        });
      });
  };
