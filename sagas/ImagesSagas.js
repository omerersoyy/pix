import { call, put, delay } from 'redux-saga/effects';
import imagesActions from '../redux/ImagesRedux';

export function* getImages(service) {

    const response = yield call(service.getImages)

    if (response.error) {
        yield put(imagesActions.getImagesError("Bir hata oluştu!") || response.error)
    } else {
        yield put(imagesActions.getImagesSuccess(response))
    }
}