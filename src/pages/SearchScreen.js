import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, Alert, StatusBar} from 'react-native';
import {getStar} from '../api';
import {Button} from '../components/Button';
import {ParamInput} from '../components/ParamInput';
import {COLOR} from '../costants/colors';
import {FONT} from '../costants/fonts';
import {TEXTS} from '../costants/texts';

/*
  @props : 
    handleStarsFounded = we use it for pass and handle the stargazlers in father
*/
export const SearchScreen = props => {
  // const [owner, setOwner] = useState('octocat');
  // const [repo, setRepo] = useState('Spoon-Knife');

  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');

  /* Callback to our api, it will pass a list of stargazers if 
  the params match the request, or will handle the error throw
  with an alert */
  const findStargazers = async () => {
    try {
      const stars = await getStar(owner, repo);
      if (stars) {
        props?.handleStarsFounded(stars);
      }
    } catch (error) {
      Alert.alert(
        TEXTS.SEARCH_SCREEN.ERROR_TITLE,
        TEXTS.SEARCH_SCREEN.ERROR_MESSAGE,
      );
      setOwner('');
      setRepo('');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <View style={styles.presentationSection}>
          <View style={styles.presentationSectionImage}>
            <Image
              width={50}
              height={50}
              source={require('./../assets/icons/stargazing.png')}></Image>
          </View>
          <Text style={styles.presentationSectionText}>
            {TEXTS.SEARCH_SCREEN.PRESENTATION}
          </Text>
        </View>
        <View>
          <ParamInput
            placeholder={TEXTS.SEARCH_SCREEN.PLACEHOLDER_OWNER}
            value={owner}
            onChangeText={setOwner}
          />
          <ParamInput
            placeholder={TEXTS.SEARCH_SCREEN.PLACEHOLDER_REPO}
            value={repo}
            onChangeText={setRepo}
          />
        </View>
        <View style={styles.footerContainer}>
          <Button
            onPressButton={findStargazers}
            buttonText={TEXTS.BUTTON.SEARCH}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND_COLOR,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  presentationSection: {
    paddingVertical: 20,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  presentationSectionText: {
    ...FONT.PRESENTATION,
  },
  presentationSectionImage: {
    paddingBottom: 20,
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 50,
  },
});
