import React from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

interface Material {
  name: string;
  iconName: any;
  amout: number;
  source?: string;
}

const TMP_MATERIAL_DATA: Material[] = [
  {
    name: 'Elektronika',
    iconName: 'cable',
    amout: 10,
  },
  {
    name: 'Paliwo',
    iconName: 'oil-barrel',
    amout: 5,
  },
  {
    name: 'Prąd',
    iconName: 'power',
    amout: 2,
  },
  {
    name: 'Pieniądze',
    iconName: 'attach-money',
    amout: 2,
  },
  {
    name: 'Metal',
    iconName: 'build',
    amout: 2,
    source: "MaterialCommunityIcons"
  },
  {
    name: 'Polution',
    iconName: 'cloud',
    amout: 2,
  },
];

const MaterialDrawer = () => {
  return (
    <View style={styles.container}>
      {TMP_MATERIAL_DATA.map((material, index) => (
        <View key={index} style={styles.material}>
          <MaterialIcons name={material.iconName} size={30} color="black" style={styles.icon}/>
          <Text style={styles.text}>
            {material.name}: {material.amout}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 15,
    backgroundColor: 'var(--base-color4)',
  },
  material: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    margin: 10,
  },
  icon: {
    position: 'relative',
    top: -4,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  }
});

export default MaterialDrawer;
