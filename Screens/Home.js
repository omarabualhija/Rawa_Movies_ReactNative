import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, StyleSheet, ScrollView} from 'react-native';
import {Slider} from '../Components/Slider';
import {
  GET_IMAGE_SLIDER,
  GET_POPULAR_MOVIES,
  GET_TRENDING_DATA,
  GET_DISCOVER_ACTION,
} from '../Redux/Actions/GetDataAction';
import {useDispatch, useSelector} from 'react-redux';
import {HorizontalList} from '../Components/HorizontalList';

export function Home({navigation}) {
  const dispatch = useDispatch();
  const {popularMovies, Loading} = useSelector(state => state.POPULAR_MOVIES);
  const {sliderImg, Loading: LoadingSLiderImg} = useSelector(
    state => state.GET_SLIDER_IMAGE,
  );
  const {TRENDING, loading: LoadingTrending} = useSelector(
    state => state.GET_TRENDING,
  );
  const {DISCOVER, loading: LoadingDiscover} = useSelector(
    state => state.GET_DISCOVER,
  );
  const handelNavigation = (id, type) => {
    navigation.navigate('Details', {id: id, type: type});
  };

  useEffect(() => {
    dispatch(GET_IMAGE_SLIDER());
    dispatch(GET_POPULAR_MOVIES());
    dispatch(GET_TRENDING_DATA());
    dispatch(GET_DISCOVER_ACTION());
  }, [dispatch]);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <View style={{width: '100%', height: '100%'}}>
          <>
            {!LoadingSLiderImg && (
              <>
                <Slider sliderImg={sliderImg}></Slider>
                <HorizontalList
                  onPress={handelNavigation}
                  vertical
                  data={popularMovies}
                  title={'POPULAR MOVIES'}></HorizontalList>
                <HorizontalList
                  onPress={handelNavigation}
                  vertical
                  data={TRENDING}
                  title={'Trending Today'}></HorizontalList>
                <HorizontalList
                  onPress={handelNavigation}
                  vertical
                  data={DISCOVER}
                  title={'DISCOVER'}></HorizontalList>
              </>
            )}
          </>
        </View>
      </ScrollView>
    </>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
