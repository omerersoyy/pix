
import { StyleSheet } from "react-native"
import {Platform} from 'react-native'

export default styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        backgroundColor: '#188ddb'
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginTop: Platform.OS === "ios" ? 30 : 20
    }
});