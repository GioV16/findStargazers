import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button} from '../components/Button';
import {StarsListItem} from '../components/StarsListItem';
import {COLOR} from '../costants/colors';
import {TEXTS} from '../costants/texts';

/*
  @props : 
    starList = starList passed from caller;
    closeStarsScreen = CTA on close button screen
*/
export const StarsScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        {props.starList.map(star => {
          return <StarsListItem key={star.username} starItem={star} />;
        })}
      </ScrollView>
      <View style={styles.footerContainer}>
        <Button
          onPressButton={props.closeStarsScreen}
          buttonText={TEXTS.BUTTON.RESEARCH}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND_COLOR,
  },
  bodyContainer: {
    justifyContent: 'center',
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 20,
  },
});
