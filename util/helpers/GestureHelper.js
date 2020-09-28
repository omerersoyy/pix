import { Directions } from 'react-native-gesture-handler'

export const getSwipeDirection = (event, screenWidth) => {
    const {x} = event
    return x < screenWidth / 2 ? Directions.LEFT : Directions.RIGHT
}