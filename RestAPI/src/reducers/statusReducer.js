const initialState = {
  search: '',
  searchError: '',

  /*saveCollect: '',
  saveCollectError: {}

  deleteCollect: '',
  deleteCollectError: {}*/
}

const statusReducer= (state = initialState, action) => {
  const actionHandlers = {
    // search statuses
    'SEARCH_REQUEST': {
      search: 'PENDING',
      searchError: '',
    },
    'SEARCH_SUCCESS': {
      search: 'SUCCESS',
      searchError: '',
    },
    'SEARCH_FAILURE': {
      search: 'ERROR',
      searchError: action.error,
    },
    // save collect statuses
    'SAVE_COLLECT_SUCCESS': {
      saveCollect: 'SUCCESS',
      saveCollectError: '',
    },
    'SAVE_COLLECT_FAILURE': {
      saveCollect: 'ERROR',
      saveCollectError: action.error,
    },
    'RESET_SAVE_COLLECT': {
      saveCollect: '',
      saveCollectError: '',
    },

    // delete favorite statuses
    'DELETE_COLLECT_SUCCESS': {
      deleteCollect: 'SUCCESS',
      deleteCollectError: '',
    },
    'DELETE_COLLECT_FAILURE': {
      deleteCollect: 'ERROR',
      deleteCollectError: { errors: action.error },
    },
    'RESET_DELETE_COLLECT': {
      deleteCollect: '',
      deleteCollectError: '',
    }
  }

  const statesToUpdate = actionHandlers[action.type];
  state = Object.assign({}, state, statesToUpdate);
  return state;
}

export default statusReducer;
