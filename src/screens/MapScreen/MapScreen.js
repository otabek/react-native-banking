import {Dimensions, FlatList, Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import SearchBar from './SearchBar';
import ATMCard from './ATMCard';
import markers from '../../../locator.json';

const {height} = Dimensions.get('window');

const MapScreen = () => {
  const data = [{id: 1}, {id: 2}];

  return (
    <View style={styles.root}>
      <MapView
        style={styles.map}
        mapType={Platform.OS === 'ios' ? 'mutedStandard' : 'standard'}
        initialRegion={{
          latitude: 21.62783,
          longitude: 39.17362,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {markers.map(({name_en, name_ar, location}, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: location ? location[0] : 21.62783,
              longitude: location ? location[1] : 39.17362,
            }}
            title={name_en}
            description={name_ar}
            image={require('../../../assets/marker.png')}
          />
        ))}
      </MapView>
      <SearchBar />
      <FlatList
        style={styles.atmContainer}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({index}) => (
          <ATMCard isLastItem={index === data.length - 1} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  map: {
    height: height - 40,
  },
  atmContainer: {
    position: 'absolute',
    bottom: 30,
  },
});
