import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import imagesActions from '../redux/ImagesRedux'
import { View } from 'react-native'
import ImageSwiper from '../components/ImageSwiper';
import config from '../integration-config.json'
import {extractImageSet} from '../util/helpers/DataHelper'

const MainScreen = ({ dispatch, data }) => {

    const [imageSet, setImageSet] = useState([])
    
    useEffect(() => {
        dispatch(imagesActions.getImages())
    }, [])

    useEffect(() => {
        if(data) {
            const imageSet = extractImageSet(data, config.pathWayForImageSet)
            setImageSet(imageSet)
        }
    }, [data])

    return (
        <View style={{flex: 1, width: '100%', height: '100%'}}>
            {
                imageSet.map((val, idx) => {
                    return (
                        <ImageSwiper key={idx} images={val.data} prop={val.prop} />
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