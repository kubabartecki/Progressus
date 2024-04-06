import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Test from './src/test/Test';

export default function App() {
  return (
    <View style={styles.container}>
      <Test name={"Hackcarpathia"}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
