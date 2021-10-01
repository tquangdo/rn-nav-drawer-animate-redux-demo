import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import CustomDrawer from './navigation/CustomDrawer'
import OnBoarding from './screen/OnBoarding'
import rootReducer from './store/rootReducer'

const Stack = createStackNavigator()
const cst_store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)
const App = () => {
  return (
    <Provider
      store={cst_store}
    >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName='OnBoarding'
        >
          <Stack.Screen
            name='Home' component={CustomDrawer}
          />
          <Stack.Screen
            name='OnBoarding' component={OnBoarding}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
