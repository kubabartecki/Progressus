import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/pages/home/Home';
import GamePage from './src/pages/game/GamePage';

/* Theme variables */
import "./src/theme/variables.css";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="GamePage"
          component={GamePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
