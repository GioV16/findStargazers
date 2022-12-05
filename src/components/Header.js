import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {FONT} from '../costants/fonts';
import {COLOR} from './../costants/colors';

/*
  @props : 
    title = text displayed on the header;
*/
export const Header = props => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLOR.HEADER.BACKGROUND_COLOR,
    height: 60,
    borderBottomWidth: 2,
  },
  title: {
    ...FONT.H1,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: COLOR.HEADER.TITLE_COLOR,
  },
});
