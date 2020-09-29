import Service from '../service/Service'
import { ImagesTypes } from '../redux/ImagesRedux'
import { getImages } from '../sagas/ImagesSagas'
import { all, takeLatest } from 'redux-saga/effects'
import config from '../integration-config.json'

const client = new Service(config.api)


export default function* root() {
    yield all([
        takeLatest(ImagesTypes.GET_IMAGES, getImages, client)
    ])
}