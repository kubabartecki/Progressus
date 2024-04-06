import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';

import {MyButton} from '../../../components/buttons/MyButton';

const StartButtons = ({ navigation }) => {
  const startGame = () => {
    navigation.navigate('GamePage');
  };

  return (
    <View style={styles.view}>
      <MyButton
        title="Start game"
        onPress={startGame}
      />
      <MyButton
        onPress={() => {}}
        title="Settings"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartButtons;
