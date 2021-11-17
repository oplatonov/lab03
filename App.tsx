import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './screens/Home/Page';
import CallHistory from './screens/CallHistory/Page';
import { About } from './screens/About/Page'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='CallHistory' component={CallHistory} />
          <Stack.Screen name='About' component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
