import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import MyNavBar from "./src/components/common/NavBar";
import FriendCreatePage from "./src/pages/Friend/FriendCreatePage";

import store from "./store";
import CalendarCreate from "./src/pages/Calendar/CalendarCreate";
import Login from "./src/pages/Login/Login";
import Signup from "./src/pages/Login/Signup";
import Transfer from "./src/pages/Transfer/Transfer";
import WriteLetter from "./src/pages/Letter/WriteLetter";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={MyNavBar}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="FriendCreate"
            component={FriendCreatePage}
            options={{
              title: "",
              headerStyle: { 
                backgroundColor: 'white',
                shadowColor: 'white',
              },
            }}
          />
          <Stack.Screen
            name="calendarCreate"
            component={CalendarCreate}
            options={{
              title: "",
              headerStyle: { 
                backgroundColor: 'white',
                shadowColor: 'white',
              },
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "",
              headerStyle: { 
                backgroundColor: 'white',
                shadowColor: 'white',
              },
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              title: "",
              headerStyle: { 
                backgroundColor: 'white',
                shadowColor: 'white',
              },
            }}
          />
          <Stack.Screen
            name="Transfer"
            component={Transfer}
            options={{
              title: "",
              headerStyle: { 
                backgroundColor: 'white',
                shadowColor: 'white',
              },
            }}
          />
          <Stack.Screen
            name="WriteLetter"
            component={WriteLetter}
            options={{
              title: "",
              headerStyle: { 
                backgroundColor: 'white',
                shadowColor: 'white',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
