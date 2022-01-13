import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from '../navigation/HistoryScreen';
const historiaStack = createNativeStackNavigator();

function historia(){
return(
<historiaStack.Navigator>
<HomeStack.Screen name="Historia" component={HistoryScreen}
       options={{
        headerStyle: {
          backgroundColor: '#625204'
        },
        headerTitleStyle: {
          color: 'white',
          fontWeight: "500"
        },
        headerTitleAlign: 'center'
      }}  />
</historiaStack.Navigator>
);

}
export default historia;