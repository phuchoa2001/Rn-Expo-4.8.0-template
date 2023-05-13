import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Trang chủ',
        }} />

    </Stack.Navigator>
  )
}

export default StackNavigator