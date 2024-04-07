import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  Pressable,
} from 'react-native';
import { Drawer } from 'react-native-drawer-layout';

import { DrawerButton } from '../../components/buttons/DrawerButton';
import MaterialDrawer from './material-drawer/MaterialDrawer';
import Board from './board/Board';
import TurnBar from './turn-bar/TurnBar';
import NextTasks from './next-tasks/NextTasks';
import { GameState } from '../../store/manageGame';

const SERVER_URL = 'ws://172.16.16.73:8765';

const GamePage = () => {
  const ws = useRef(new WebSocket(SERVER_URL)).current;
  const winningNumber = 7;
  const winningBuilding = 2;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showWinningModal, setShowWinningModal] = useState(false);
  const [showStartModal, setShowStartModal] = useState(true);
  const [gameState, setGameState] = useState<GameState>({
    resources: {
      money: 0,
      power: 0,
      fuel: 0,
      steel: 0,
      circuits: 0,
      pollution: 0,
    },
    board: Array(64).fill(0),
  });
  const [serverState, setServerState] = React.useState('Loading...');
  const [messageText, setMessageText] = React.useState('');
  const [disableButton, setDisableButton] = React.useState(true);
  const [inputFieldEmpty, setInputFieldEmpty] = React.useState(true);
  const [serverMessages, setServerMessages] = React.useState([]);
  const [turn, setTurn] = useState(1);

  useEffect(() => {
    const serverMessagesList = [];
    ws.onopen = () => {
      setServerState('Connected to the server')
      setDisableButton(false);
    };
    ws.onclose = (e) => {
      setServerState('Disconnected. Check internet or server.')
      setDisableButton(true);
    };
    // ws.onerror = (e) => {
    //   setServerState(e.message);
    // };
    ws.onmessage = (e) => {
      console.log(e.data);
      const data = JSON.parse(e.data);
      const gameStateUpdate = {
        resources: data.resources,
        board: data.board,
      };
      setGameState(gameStateUpdate);
      setTurn(data.turn);
      setServerMessages([...serverMessagesList])
    };
  }, [])

  useEffect(() => {
    // fetch game state
    if (gameState.board.filter(item => item === winningBuilding).length === winningNumber) {
      setShowWinningModal(true);
    }
    else if (gameState.turn >= 20) {
      setShowLoseModal(true);
    }
  }, [gameState]);

  return (
    <Drawer
      open={openDrawer}
      onOpen={() => setOpenDrawer(true)}
      onClose={() => setOpenDrawer(false)}
      renderDrawerContent={MaterialDrawer}
      style={styles.drawer}
    > 
      <View style={styles.top}>
        <DrawerButton
          onPress={() => setOpenDrawer((prevOpen) => !prevOpen)}
          title={`${openDrawer ? 'close' : 'open'}`}
        />
        <View style={styles.nextTasks}>
          <NextTasks />
        </View>
      </View>
      <View style={styles.container}>
        <Board board={gameState.board}/>
        <TurnBar turn={turn}/>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showWinningModal}
        onRequestClose={() => {
          setShowWinningModal(!showWinningModal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Wygrana!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShowWinningModal(!showWinningModal)}>
              <Text style={styles.textStyle}>Osiągnąłeś swój cel! Twoje miasto się rozwija!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showStartModal}
        onRequestClose={() => {
          setShowStartModal(!showStartModal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Witaj w moim mieście!</Text>
            <Text style={styles.modalText}>{`Twoim zadaniem jest postawienie ${winningNumber} parków!`}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShowStartModal(!showStartModal)}>
              <Text style={styles.textStyle}>Zaczynamy!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nextTasks: {
    flexGrow: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GamePage;
