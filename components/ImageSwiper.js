import React, { useState } from "react";
import { View, Dimensions, Image } from "react-native";
import { FlingGestureHandler, Directions } from 'react-native-gesture-handler'
import { getSwipeDirection } from '../util/helpers/GestureHelper'
import Animated, { Easing } from 'react-native-reanimated'
import styles from './styles/ImageSwiperStyles'
import ImagePager from "./ImagePager";

export default ImageSwiper = ({ images, prop }) => {

    const [currentImgIdx, setCurrentImgIdx] = useState(0)
    const screenWidth = Dimensions.get("screen").width
    const [opacity, setOpacity] = useState(new Animated.Value(0.7))

    const onLoadImage = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.sin
        }).start();
    }

    const onHandlerStateChange = (e) => {

        e.persist()
        const { nativeEvent } = e

        if (nativeEvent.oldState === 4) {
            setOpacity(new Animated.Value(0.7))
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
        <View style={styles.container}>
            <FlingGestureHandler 
                direction={Directions.RIGHT | Directions.LEFT} 
                onHandlerStateChange={onHandlerStateChange} 
                >
                <Animated.Image
                    onLoad={onLoadImage}
                    style={
                        [styles.image, {
                            opacity: opacity,
                            transform: [
                                {
                                    scale: opacity.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.91, 1],
                                    })
                                },
                            ],
                        }]
                    }
                    source={{ uri: images && images[currentImgIdx] && images[currentImgIdx][prop] }}
                    resizeMode={'cover'}
                />
            </FlingGestureHandler>
            {images.length && <ImagePager current={currentImgIdx + 1} total={images && images.length} />}
        </View>
    )
}
