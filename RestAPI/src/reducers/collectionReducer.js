const initialState = {};

const collectionReducer= (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_COLLECTION_SUCCESS':
      state = Object.assign({}, state, action.collection);
      break;

    case 'GET_COLLECTION_SUCCESS':
      state = action.collection;
      break;

    case 'DELETE_COLLECTION_SUCCESS':
      state = Object.assign({}, state);
      delete state[action.pictureID];
      break;

    default: return state;
  }
  return state;
}

export default collectionReducer;
