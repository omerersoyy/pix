import Service from '../service/Service'
import { ImagesTypes } from '../redux/ImagesRedux'
import { getImages } from '../sagas/ImagesSagas'
import { all, takeLatest } from 'redux-saga/effects'

const client = new Service("api3")


export default function* root() {
    yield all([
        takeLatest(ImagesTypes.GET_IMAGES, getImages, client)
    ])
}