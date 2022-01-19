import React, {useEffect} from 'react';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {GET_DETAILS_ACTION} from '../Redux/Actions/GetDataAction';
import {useDispatch, useSelector} from 'react-redux';

export function Details({route}) {
  const {height, width} = useWindowDimensions();
  const id = route.params.id;
  const dispatch = useDispatch();
  const {DETAILS, loading} = useSelector(state => state.GET_DETAILS);

  useEffect(() => {
    dispatch(GET_DETAILS_ACTION(id));
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{postion: 'relative'}}>
            <Image
              resizeMode="stretch"
              style={{width: width, height: height / 2}}
              source={
                DETAILS.poster_path
                  ? {
                      uri: `https://image.tmdb.org/t/p/w500${DETAILS.poster_path}`,
                    }
                  : {
                      uri: 'https://www.zeemee.com/assets/V3/pinned-video-placeholder-af44fab4c1d9dddcf7fdfc2aca8d275a.png',
                    }
              }
            />
            <View style={{position: 'absolute', bottom: -25, right: 25}}>
              <Pressable
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: 'gold',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon style={{fontSize: 40}} name="play-outline" />
              </Pressable>
            </View>
          </View>
          <View
            style={{
              marginTop: 40,
              alignSelf: 'center',
              marginVertical: 8,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {DETAILS.original_title}
            </Text>
          </View>

          <View
            style={{width: width, alignItems: 'center', marginVertical: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}>
              {DETAILS.genres.map(e => (
                <Text
                  key={e.id}
                  style={{
                    marginRight: 7,
                    marginBottom: 10,
                    backgroundColor: 'gold',
                    padding: 5,
                    borderRadius: 30,
                  }}>
                  {e.name}
                </Text>
              ))}
            </View>
            <StarRating
              starStyle={{marginRight: 7}}
              fullStarColor="gold"
              disabled={true}
              maxStars={5}
              rating={DETAILS.vote_average / 2}
            />
          </View>

          <View style={{marginVertical: 15, padding: 8}}>
            <Text style={{fontSize: 20, marginBottom: 5, marginLeft: 5}}>
              Over View
            </Text>
            <Text style={{lineHeight: 25}}>{DETAILS.overview}</Text>
          </View>
        </ScrollView>
      )}
    </>
  );
}
