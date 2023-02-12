import apiClient from '../apiClient';

export const searchRequest = () => ({
  type: 'SEARCH_REQUEST'
});
export const searchSuccess = (payload) => ({
  type: 'SEARCH_SUCCESS', payload
});
export const searchFailure = (error) => ({
  type: 'SEARCH_FAILURE', error
});

export function search(searchtitle){
  return (dispatch) => {
    dispatch(searchRequest());
    try {apiClient.query(searchtitle)
        .then(response => {
          dispatch(searchSuccess({payload:response}));
        })} catch (error) {
      dispatch(searchFailure(error))
    };
   }
 }
