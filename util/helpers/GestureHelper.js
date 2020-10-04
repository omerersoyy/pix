import { Directions } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'

export const getSwipeDirection = (event, width) => {
    const {x} = event
    let actualWidth = width === "100%" ? Dimensions.get("screen").width : width
    return x < actualWidth / 2 ? Directions.LEFT : Directions.RIGHT
}