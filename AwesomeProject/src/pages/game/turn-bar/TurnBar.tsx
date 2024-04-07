import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Bar } from 'react-native-progress';

const TurnBar = () => {
  const MAX_TURN = 10;
  const [TMP_TURN, setTMP_TURN] = React.useState(4);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Turn ${TMP_TURN}/${MAX_TURN}`}</Text>
      <Bar progress={TMP_TURN / MAX_TURN} style={styles.bar}/>
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
