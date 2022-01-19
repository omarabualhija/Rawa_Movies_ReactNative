import React from 'react';
import {Image, SafeAreaView, useWindowDimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
export function Slider({sliderImg}) {
  const {height, width} = useWindowDimensions();
  const _renderItem = ({item}) => {
    return (
      <Image
        style={{
          marginRight: width > height ? 50 : 0,
          width: width > height ? width / 2 : width,
          height: height / 2,
          resizeMode: 'stretch',
        }}
        source={{uri: item}}
      />
    );
  };

  return (
    <SafeAreaView style={{width: width, height: height / 2}}>
      <Carousel
        style={{flex: 1}}
        autoplay={true}
        loop={true}
        layout={'default'}
        data={sliderImg}
        sliderWidth={width}
        itemWidth={width > height ? width / 2 : width}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  );
}
