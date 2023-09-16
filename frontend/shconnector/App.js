import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import MyNavBar from './src/components/common/NavBar';
import FriendCreatePage from './src/pages/Friend/FriendCreatePage';

import store from "./store";
import CalendarCreate from "./src/pages/Calendar/CalendarCreate";
import Login from "./src/pages/Login/Login";
import Signup from "./src/pages/Login/Signup";
import Transfer from "./src/pages/Transfer/Transfer";
import CheckAccount from "./src/pages/Transfer/CheckAccount";
import CheckExpense from "./src/pages/Transfer/CheckExpense";
import CheckTransfer from "./src/pages/Transfer/CheckTransfer";
import WriteLetter from "./src/pages/Letter/WriteLetter";
import Savings from "./src/pages/Recommend/Savings";
import LikeSavings from "./src/pages/Recommend/LikeSavings";
import Gift from "./src/pages/Recommend/Gift";
import AccountList from "./src/pages/Account/AccountList";
import FriendPage from "./src/pages/Friend/FriendPage";
import FriendUpdatePage from "./src/pages/Friend/FriendUpdatePage";
import CalendarPage from "./src/pages/Calendar/CalendarPage";
import AccountDetail from "./src/pages/Account/AccountDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Home'
            component={MyNavBar}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='FriendCreate'
            component={FriendCreatePage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='CalendarCreate'
            component={CalendarCreate}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Savings'
            component={Savings}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Gift'
            component={Gift}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Signup'
            component={Signup}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Transfer'
            component={Transfer}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'white',
                shadowColor: 'white',
              },
            }}
          />
          <Stack.Screen
            name='WriteLetter'
            component={WriteLetter}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'white',
                shadowColor: 'white',
              },
            }}
          />

          <Stack.Screen
            name='AccountList'
            component={AccountList}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'white',
                shadowColor: 'white',
              },
            }}
          />
          <Stack.Screen
            name='FriendPage'
            component={FriendPage}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'white',
                shadowColor: 'white',
              },
            }}
          />
          <Stack.Screen
            name='CalendarPage'
            component={CalendarPage}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'white',
                shadowColor: 'white',
              },
            }}
          />
          <Stack.Screen
            name='CheckAccount'
            component={CheckAccount}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'white',
                shadowColor: 'white',
              },
            }}
          />
          <Stack.Screen
            name='CheckExpense'
            component={CheckExpense}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'white',
                shadowColor: 'white',
              },
            }}
          />
          <Stack.Screen
            name='CheckTransfer'
            component={CheckTransfer}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'white',
                shadowColor: 'white',
              },
            }}
          />
          <Stack.Screen
            name='AccountDetail'
            component={AccountDetail}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'white',
                shadowColor: 'white',
              },
            }}
          />
          <Stack.Screen
            name='LikeSavings'
            component={LikeSavings}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'white',
                shadowColor: 'white',
              },
            }}
          />
          <Stack.Screen
            name="FriendUpdatePage"
            component={FriendUpdatePage}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "white",
                shadowColor: "white",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
