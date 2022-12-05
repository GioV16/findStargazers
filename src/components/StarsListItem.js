import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {COLOR} from '../costants/colors';

/*
  @props : 
    starItem = object with users data. We need username and avatar;
*/
export const StarsListItem = props => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.avatar}
        width={70}
        height={70}
        source={{uri: props.starItem.avatar}}></Image>
      <View style={styles.usernameTextView}>
        <Text style={styles.usernameText}>{props.starItem.username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    height: 70,
    marginHorizontal: 5,
    marginVertical: 2,
    flexDirection: 'row',
    backgroundColor: COLOR.STAR_ITEM.BACKGROUND,
  },
  avatar: {
    resizeMode: 'contain',
    marginHorizontal: 10,
    borderRadius: 30,
  },
  usernameTextView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  usernameText: {
    color: COLOR.STAR_ITEM.TEXT,
    fontSize: 23,
  },
});
