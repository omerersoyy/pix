import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from './styles/GenericHeaderStyles'

export default GenericHeader = ({title}) => {


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
}
