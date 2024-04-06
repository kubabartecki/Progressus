import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  onPress: () => void;
  title?: string;
}

export const DrawerButton: React.FC<Props> = props => {
  const { onPress, title } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name="menu-outline" size={24} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    maxWidth: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    margin: 10,
    borderRadius: 4,
    backgroundColor: 'var(--base-color4)',
  },
  icon: {
    fontSize: 18,
    lineHeight: 21,
  },
});
