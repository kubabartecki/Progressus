import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Building = ({ item }) => {
  return (
    <View style={styles.item}>{item.icon}</View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    maxWidth: "25%",
    alignItems: "center",
    
    padding: 5,
    backgroundColor: "rgba(249, 180, 45, 0.25)",
    borderWidth: 1.5,
    borderColor: "#fff"
  }
});
