import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import imagesActions from '../redux/ImagesRedux'
import { View, Alert } from 'react-native'
import ImageSwiper from '../components/ImageSwiper'
import config from '../integration-config.json'
import { extractImageSet, getFlexPositions } from '../util/helpers/DataHelper'
import styles from './styles/MainScreenStyles'
import GenericHeader from '../components/GenericHeader'


const MainScreen = ({ dispatch, data, error }) => {

    const { position } = config
    const [imageSet, setImageSet] = useState([])
    let swiperContainerStyle

    if (position) {
        swiperContainerStyle = {
            height: '100%',
            ...getFlexPositions(position)
        }
    }

    useEffect(() => {
        dispatch(imagesActions.getImages())
    }, [])

    useEffect(() => {
        if (data) {
            const imageSet = extractImageSet(data, config.pathWayForImageSet)
            setImageSet(imageSet)
        }
    }, [data])

    useEffect(() => {
        if (error) {
            Alert.alert(
                "Bir hata oluştu!",
                error,
                [
                    { text: "Kapat" }
                ],
                { cancelable: true }
            );
        }
    }, [error])

    return (
        <View style={styles.container}>
            <GenericHeader title={'Pix Gallery'} />
            {
                imageSet.map((val, idx) => {
                    return (
                        <View key={idx} style={{ ...swiperContainerStyle }}>
                            <ImageSwiper images={val.data} prop={val.prop} />
                        </View>
                    )
                })
            }
        </View>
    )
}

const mapStateToProps = ({ imagesReducer }) => {
    return {
        imagesReducer,
        data: imagesReducer.data,
        error: imagesReducer.error
    }
}

export default connect(mapStateToProps)(MainScreen)