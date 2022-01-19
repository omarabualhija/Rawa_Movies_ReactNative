import React from 'react';
import {Provider} from 'react-redux';
import {compainReducers} from './Redux/Reducer/CombainReducer';
import {Home} from './Screens/Home';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Details} from './Screens/Details';
//start create redux store
const store = createStore(compainReducers, applyMiddleware(thunk));
//end create redux store
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
