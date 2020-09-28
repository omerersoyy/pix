import { createActions, createReducer } from 'reduxsauce'

const { Types, Creators } = createActions({
  getImages: null,
  getImagesSuccess: ['data'],
  getImagesError: ['error']
});

const initialState = {
  data: null,
  error: '',
  fetching: false
};

export const ImagesTypes = Types;

export default Creators;

export const getImages = (state) => {
  return {...state, error: initialState.error, fetching: true}
}

export const getImagesSuccess = (state, { data }) => {
  return {...state, fetching: initialState.fetching, data}
}

export const getImagesError = (state, { error }) => {
  return {...state, error, fetching: initialState.fetching}
}

export const imagesReducer = createReducer(initialState, {
  [Types.GET_IMAGES]: getImages,
  [Types.GET_IMAGES_SUCCESS]: getImagesSuccess,
  [Types.GET_IMAGES_ERROR]: getImagesError
})