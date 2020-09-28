import React, { useRef, useState } from "react";
import { View, StyleSheet, PanResponder, Text, Image, Dimensions } from "react-native";
import { FlingGestureHandler, Directions } from 'react-native-gesture-handler'
import { getSwipeDirection } from '../util/helpers/GestureHelper'

export default ImageSwiper = ({ images }) => {

    const [currentImgIdx, setCurrentImgIdx] = useState(0)
    const screenWidth = Dimensions.get("screen").width

    const onHandlerStateChange = (e) => {

        e.persist()
        const { nativeEvent } = e

        if (nativeEvent.oldState === 4) {
            const direction = getSwipeDirection(nativeEvent, screenWidth)

            if (direction === Directions.RIGHT) {
                if (currentImgIdx !== images.length - 1) {
                    setCurrentImgIdx(currentImgIdx + 1)
                } else {
                    setCurrentImgIdx(0)
                }
            } else {
                if (currentImgIdx !== 0) {
                    setCurrentImgIdx(currentImgIdx - 1)
                } else {
                    setCurrentImgIdx(images.length - 1)
                }
            }

        }
    }

    return (
        <View style={{ flex: 1 }}>
            <FlingGestureHandler direction={Directions.RIGHT | Directions.LEFT} onHandlerStateChange={onHandlerStateChange} >
                <Image style={{ width: '100%', height: 300 }} source={{ uri: images && images[currentImgIdx].image_url }} />
            </FlingGestureHandler>
        </View>
    )
}
