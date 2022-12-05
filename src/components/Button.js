import React, {useEffect} from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';
import {FONT} from '../costants/fonts';
import {COLOR} from './../costants/colors';

/*
  @props : 
    onPressButton = CTA on button press;
    buttonText = button label;
*/
export const Button = props => {
  useEffect(() => {}, []);

  return (
    <Pressable
      style={styles.mainContainer}
      onPress={() => props.onPressButton()}>
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLOR.BUTTON.BACKGROUND_COLOR,
    justifyContent: 'center',
    width: '80%',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    ...FONT.BUTTON,
    color: COLOR.BUTTON.TEXT,
    textAlign: 'center',
  },
});
