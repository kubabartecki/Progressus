import {NavigationContainer} from '@react-navigation/native';

import Home from './src/pages/home/Home';

/* Theme variables */
import "./src/theme/variables.css";

export default function App() {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}
