import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';

import {MyButton} from '../../../components/button/MyButton';

const StartButtons: React.FC = () => {
  const startGame = () => {
    console.log('Game started');
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
