import React, {useEffect, useState} from 'react';
import {Platform, SafeAreaView, View, StyleSheet} from 'react-native';
import {Header} from './src/components/Header';
import {COLOR} from './src/costants/colors';
import {TEXTS} from './src/costants/texts';
import {SearchScreen} from './src/pages/SearchScreen';
import {StarsScreen} from './src/pages/StarsScreen';

const App = () => {
  const [starsFounded, setStarsFounded] = useState([]);
  const [hasToShowStarsList, setHasToShowStarsList] = useState(false);

  const handleStarsFounded = stars => {
    console.log('Start founded : \n', stars);
    setStarsFounded(stars);
  };

  const closeStarsScreen = () => {
    setStarsFounded([]);
    setHasToShowStarsList(false);
  };

  useEffect(() => {
    starsFounded.length >= 1
      ? setHasToShowStarsList(true)
      : setHasToShowStarsList(false);
  }, [starsFounded]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {Platform.OS === 'ios' && (
        <View
          style={{
            width: '100%',
            height: 100,
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: COLOR.HEADER.BACKGROUND_COLOR,
          }}
        />
      )}
      <Header title={TEXTS.HEADER.TITLE} />
      <View style={styles.bodyContainer}>
        {hasToShowStarsList ? (
          <StarsScreen
            closeStarsScreen={closeStarsScreen}
            starList={starsFounded}
          />
        ) : (
          <SearchScreen handleStarsFounded={handleStarsFounded} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND_COLOR,
  },
  bodyContainer: {
    flex: 1,
  },
});

export default App;
