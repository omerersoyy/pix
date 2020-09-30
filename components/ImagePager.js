import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { FlingGestureHandler, Directions } from 'react-native-gesture-handler'
import { getSwipeDirection } from '../util/helpers/GestureHelper'
import Animated, { Easing } from 'react-native-reanimated'
import styles from './styles/ImagePagerStyles'

export default ImagePager = ({ current, total, opacity = new Animated.Value(1) }) => {

    const fadeOut = () => {
        return (
            Animated.timing(
                opacity,
                {
                    toValue: 0,
                    duration: 4000,
                    easing: Easing.linear
                }
            ).start()
        )
    }

    useEffect(() => {
        fadeOut()
    }, [current])

    return (
        <Animated.View style={[styles.container, {
            opacity
        }]}>
            <Text style={styles.text}>
                {current} / {total}
            </Text>
        </Animated.View>
    )
}
