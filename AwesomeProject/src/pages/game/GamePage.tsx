import React, { useState } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Drawer } from 'react-native-drawer-layout';

import {DrawerButton} from '../../components/buttons/DrawerButton';
import MaterialDrawer from './material-drawer/MaterialDrawer';
import Board from './board/Board';

const GamePage = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Drawer
      open={openDrawer}
      onOpen={() => setOpenDrawer(true)}
      onClose={() => setOpenDrawer(false)}
      renderDrawerContent={MaterialDrawer}
      style={styles.a}
    >
      <DrawerButton
        onPress={() => setOpenDrawer((prevOpen) => !prevOpen)}
        title={`${open ? 'close' : 'open'}`}
      />
      <Board />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  a: {
    backgroundColor: 'var(--base-color3)',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default GamePage;
