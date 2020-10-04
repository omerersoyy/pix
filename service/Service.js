import MockData from './Api'

export default class Service {
    
    getImages = () =>
        fetch("/images")
            .then((resp) => resp.json())
            .catch(err => console.log(err))
}