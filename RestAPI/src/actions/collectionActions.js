import apiClient from '../apiClient';

// save favorite actions
export const saveColletionSuccess = (collection) => ({
  type: 'SAVE_COLLECTION_SUCCESS', collection
});

export const saveCollectionFailure = (error) => ({
  type: 'SAVE_COLLECTION_FAILURE', error
});

export const resetSaveCollectionStatus = () => ({
  type: 'RESET_SAVE_COLLECTION'
});

// get all favorites actions
export const getAllSuccess = (collections) => ({
  type: 'GET_COLLECTION_SUCCESS', collections
});

export const getAllFailure = (error) => ({
  type: 'GET_COLLECTIONS_FAILURE', error
});

// delete favorite actions
export const deleteCollectionSuccess = (pictureID) => ({
  type: 'DELETE_COLLECTION_SUCCESS', pictureID
});

export const deleteCollectionError = () => ({
  type: 'DELETE_COLLECTION_ERROR'
});

export const resetDeleteCollectionStatus = () => ({
  type: 'RESET_DELETE_COLLECTION'
});

// CRUD API call actions
export function save(picture) {
  return (dispatch) => {
    apiClient.saveCollection(picture)
      .then(res => {
        dispatch(saveColletionSuccess(res.data))
      })
      .catch(err => {
        dispatch(saveCollectionFailure(err.response.data))
      });
  }
}

export function getAll() {
  return (dispatch) => {
    apiClient.getAllCollections()
      .then(res => {
        dispatch(getAllSuccess(res.data))
      })
      .catch(err => {
        dispatch(getAllFailure(err.response.data))
      });
  }
}

export function deleteCollection(pictureID) {
  return (dispatch) => {
    apiClient.deleteCollection(pictureID)
      .then(res => {
        dispatch(deleteCollectionSuccess(pictureID))
      })
      .catch(err => {
        dispatch(deleteCollectionError(err.response.data))
      })
  }
}
