import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import StartButtons from './start-buttons/StartButtons';

const Home: React.FC = () => {
  return (
    <View style={styles.body}>
      <Image
        source={require('../../../assets/favicon.png')}
        style={styles.logo}
      />
      <StartButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    fontFamily: 'var(--font-family)',
    backgroundColor: 'var(--base-color1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 50,
  },
});

export default Home;
