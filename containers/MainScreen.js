import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import imagesActions from '../redux/ImagesRedux'
import { View } from 'react-native'
import ImageSwiper from '../components/ImageSwiper'
import config from '../integration-config.json'
import { extractImageSet } from '../util/helpers/DataHelper'
import styles from './styles/MainScreenStyles'
import GenericHeader from '../components/GenericHeader'


const MainScreen = ({ dispatch, data }) => {

    const {position} = config
    const [imageSet, setImageSet] = useState([])
    let swiperContainerStyle

    if(position) {
        swiperContainerStyle = {
            height: '100%'
        }

        if(position === "top") {
            swiperContainerStyle.justifyContent = "flex-start"
        } else if(position === "middle") {
            swiperContainerStyle.justifyContent = "center"
        } else if(position === "bottom") {
            swiperContainerStyle.justifyContent = "flex-end"
        } else {
            //TO-DO: invalid config alert
        }
    } else {

    }

    useEffect(() => {
        dispatch(imagesActions.getImages())
    }, [])

    useEffect(() => {
        if (data) {
            try {
                const imageSet = extractImageSet(data, config.pathWayForImageSet)
                setImageSet(imageSet)
            } catch (err) {
                alert(":(")
            }
        }
    }, [data])

    return (
        <View style={styles.container}>
            <GenericHeader title={'Pix Gallery'} />
            {
                imageSet.map((val, idx) => {
                    return (
                        <View key={idx} style={{...swiperContainerStyle}}>
                            <ImageSwiper  images={val.data} prop={val.prop} />
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
        data: imagesReducer.data
    }
}

export default connect(mapStateToProps)(MainScreen)