import {FlatList, Platform, StatusBar, View} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import SearchBar from './SearchBar';
import ATMCard from './ATMCard';
import markers from '../../../locator.json';
import {styles} from './MapScreen.styles';
import {cardData} from '../../constants/data';

const MapScreen = () => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
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
        data={cardData}
        renderItem={({index}) => (
          <ATMCard isLastItem={index === cardData.length - 1} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MapScreen;
