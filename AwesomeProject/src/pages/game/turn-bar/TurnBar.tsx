import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Bar } from 'react-native-progress';

const TurnBar = (props) => {
  const MAX_TURN = 20;
  // const [turn, setTurn] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Tura ${props.turn}/${MAX_TURN}`}</Text>
      <Bar progress={props.turn / MAX_TURN}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 7,
  },
});

export default TurnBar;
