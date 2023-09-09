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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F6FD',
    justifyContent: 'center',
  },
  titleCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 45,
    marginHorizontal: 35,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  loginCon: {
    flex: 1.3,
    marginTop: 30,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  loginUpper: {
    flex: 2,
    flexDirection: 'row',
    paddingLeft: 12,
  },
  loginImg: {
    width: '80%',
    height: '80%',
  },
  loginLeft: {
    flex: 1.5,
    justifyContent: 'center',
  },
  loginRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 2.5,
  },
  grayText: {
    fontSize: 16,
    color: 'gray',
  },
  boldText: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  sub: {
    marginBottom: 12,
  },
  serviceCon: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: 20,
  },
  serviceEach: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 23,
    paddingHorizontal: 15,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  serviceImg: {
    width: '60%',
    height: '60%',
    marginLeft: 50,
  },
  serviceLine: {
    flex: 1,
    flexDirection: 'row',
  },
  nav: {
    flex: 0.3,
    backgroundColor: 'white',
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
});
