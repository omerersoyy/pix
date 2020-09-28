import { call, put, delay } from 'redux-saga/effects';
import imagesActions from '../redux/ImagesRedux';

export function* getImages(service) {

    const response = service.getImages()

    yield delay(1000)

    yield put(imagesActions.getImagesSuccess(response))
}