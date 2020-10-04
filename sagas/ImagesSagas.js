import { call, put, delay } from 'redux-saga/effects';
import imagesActions from '../redux/ImagesRedux';
import i18n from '../util/I18n'

export function* getImages(service) {

    const response = yield call(service.getImages)
    const {error, errorCode} = response

    if (error) {
        const message = errorCode ? i18n.t('httpErrors')[errorCode] : error
        yield put(imagesActions.getImagesError(message))
    } else {
        yield put(imagesActions.getImagesSuccess(response))
    }
}