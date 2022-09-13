import {FlatList, StatusBar, useWindowDimensions, View} from 'react-native';
import React, {useState} from 'react';
import SplashScreen from './SplashScreen';
import SecondSpashScreen from './SecondSplashScreen';
import DotNavigator from '../../components/DotNavigator';
import {styles} from './OnboardingScreen.styles';

const slides = [
  {
    id: 1,
    component: <SplashScreen />,
  },
  {
    id: 2,
    component: <SecondSpashScreen />,
  },
];

const OnboardingScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const {width} = useWindowDimensions();

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  return (
    <View style={styles.root}>
      <StatusBar
        barStyle={currentSlideIndex === 0 ? 'light-content' : 'default'}
      />
      <FlatList
        onMomentumScrollEnd={updateCurrentSlideIndex}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={slides}
        renderItem={({item}) => item.component}
        keyExtractor={item => item.id}
      />
      <DotNavigator slides={slides} currentSlideIndex={currentSlideIndex} />
    </View>
  );
};

export default OnboardingScreen;
