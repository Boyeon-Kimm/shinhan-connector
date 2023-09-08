import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';
import MyButton from './src/components/common/Button';
import char1 from './assets/character1.png';
import char2 from './assets/character2.png';
import char3 from './assets/character3.png';
import char7 from './assets/character7.png';
import char8 from './assets/character8.png';

import MyNavBar from './src/components/common/NavBar';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyNavBar />
      </NavigationContainer>
    </Provider>
  );
}