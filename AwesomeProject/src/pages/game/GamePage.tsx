import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Drawer } from 'react-native-drawer-layout';

import {DrawerButton} from '../../components/buttons/DrawerButton';
import MaterialDrawer from './material-drawer/MaterialDrawer';
import Board from './board/Board';
import TurnBar from './turn-bar/TurnBar';

const GamePage = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Drawer
      open={openDrawer}
      onOpen={() => setOpenDrawer(true)}
      onClose={() => setOpenDrawer(false)}
      renderDrawerContent={MaterialDrawer}
      style={styles.drawer}
    >
      <DrawerButton
        onPress={() => setOpenDrawer((prevOpen) => !prevOpen)}
        title={`${openDrawer ? 'close' : 'open'}`}
      />
      <View style={styles.container}>
        <Board />
        <TurnBar />
      </View>
    </Drawer>
  );
};

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: 'var(--base-color3)',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default GamePage;
