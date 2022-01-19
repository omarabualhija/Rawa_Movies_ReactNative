import React from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  useWindowDimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
export function HorizontalList({data, title, onPress}) {
  const {height, width} = useWindowDimensions();

  const _ActivityIndicator = () => <ActivityIndicator />;

  const BoxImg = ({item}) => {
    return (
      <TouchableOpacity onPress={() => onPress(item.id)}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            resizeMode="stretch"
            style={{width: width / 3, height: width / 3, marginLeft: 10}}
            source={
              item.poster_path
                ? {uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}
                : {
                    uri: 'https://www.zeemee.com/assets/V3/pinned-video-placeholder-af44fab4c1d9dddcf7fdfc2aca8d275a.png',
                  }
            }
          />
          <View
            style={{
              padding: 15,
              flexDirection: 'row',
              width: width / 3,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{marginRight: 5}}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.original_title}
            </Text>
            <Text>{item.vote_average}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          marginVertical: 15,
          paddingHorizontal: 10,
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={BoxImg}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
}
