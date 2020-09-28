import MockData from './Api'

export default class Service {
    constructor(api) {
        this.api = api
    }

    getImages() {

        return (
            MockData[this.api]
        )
    }
}