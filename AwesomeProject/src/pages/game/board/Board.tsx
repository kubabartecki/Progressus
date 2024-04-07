import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
} from 'react-native';

import { Building } from '../../../components/building/Building';
import { Dimensions } from 'react-native'

// const TMP_BUILDING_DATA: number[] = Array(64).fill(1);
interface Props {
  board: number[];
}

const numColumns = 8;
const Board: React.FC<Props> = (props) => {
  // if you know better way to code this let me know
  const buildingNumToReq = (number: number) => {
    switch (number) {
      case 0:
        return require('../../../../assets/buildings/EMPTY.png');
      case 1:
        return require('../../../../assets/buildings/CIRCUIT_FACTORY.png');
      case 2:
        return require('../../../../assets/buildings/PARK.png');
      case 3:
        return require('../../../../assets/buildings/WINDMILL.png');
      case 4:
        return require('../../../../assets/buildings/COAL_POWER_PLANT.png');
      case 5:
        return require('../../../../assets/buildings/OIL_RIG.png');
      case 6:
        return require('../../../../assets/buildings/SMELTERY.png');
      case 7:
        return require('../../../../assets/buildings/SHOP.png');
      case 8:
        return require('../../../../assets/buildings/DEMOMAN_OFFICE.png');
      case 9:
        return require('../../../../assets/buildings/AIR_CONDITIONER.png');
      case 10:
        return require('../../../../assets/buildings/LABORATORY.png');
      case 11:
        return require('../../../../assets/buildings/SUPPLY_LINE_TRUCK.png');
      case 12:
        return require('../../../../assets/buildings/SUPPLY_LINE_AIRPLANE.png');
    }
  }
  const [board, setBoard] = useState<number[]>([]);

  useEffect(() => {
    setBoard(props.board);
  }, [props.board]);

  const buildingData = props.board.map((item) =>
    ({ icon:
        <Image
          style={styles.image}
          source={buildingNumToReq(item)}
        />
      }
    ));

  return (
    <View style={styles.app}>
      <FlatList
        data={buildingData}
        numColumns={numColumns}
        renderItem={Building}
        keyExtractor={(item) => item.alt}
      />
    </View>
  );
};

const boardWidth = Dimensions.get('window').width * 0.95;
const boardHeight = Dimensions.get('window').height * 0.95;
const maxSize = Math.min(boardWidth, boardHeight);

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    marginVertical: 20,
  },
  image: {
    width: maxSize / numColumns - 10,
    height: maxSize / numColumns - 10,
  }
});

export default Board;
