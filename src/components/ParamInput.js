import React, {useEffect} from 'react';
import {View, StyleSheet, TextInput, Pressable, Image} from 'react-native';
import {COLOR} from '../costants/colors';
import {FONT} from '../costants/fonts';

/*
  @props : 
    placeholder = label showed when value is empty;
    onChangeText = action called when text is changing;
    value = variable where input digits are stored;
*/
export const ParamInput = props => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={COLOR.INPUT_TEXT.PLACEHOLDER}
        style={styles.inputText}
        onChangeText={props.onChangeText}
        multiline={false}
        keyboardType={'default'}
        value={props.value}
        editable={true}
        selectionColor={COLOR.INPUT_TEXT.SELECTION}
        activeColor={COLOR.INPUT_TEXT.ACTIVE}
      />
      <Pressable
        style={styles.clearButton}
        onPress={() => props.onChangeText('')}>
        <View style={styles.clearButtonImage}>
          <Image source={require('./../assets/icons/close.png')}></Image>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLOR.INPUT_TEXT.BACKGROUND_COLOR,
    borderWidth: 2,
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 15,
    height: 50,
  },
  inputText: {
    ...FONT.BODY,
    color: COLOR.INPUT_TEXT.INPUT_TEXT,
    flex: 1,
    paddingLeft: 10,
  },
  clearButton: {
    alignContent: 'flex-end',
    width: 30,
  },
  clearButtonImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  },
});
