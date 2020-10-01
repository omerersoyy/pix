import { Directions } from 'react-native-gesture-handler'

export const getSwipeDirection = (event, width) => {
    const {x} = event
    return x < width / 2 ? Directions.LEFT : Directions.RIGHT
}