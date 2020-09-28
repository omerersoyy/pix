import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import imagesActions from '../redux/ImagesRedux'
import { View } from 'react-native'
import ImageSwiper from '../components/ImageSwiper';

const MainScreen = ({ dispatch, data }) => {

    useEffect(() => {
        dispatch(imagesActions.getImages())
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <View style={{flex: 1, width: '100%', height: '100%'}}>
            <ImageSwiper images={data?.swipers[0]?.swiper?.image_set} />
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