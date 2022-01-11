import * as React from 'react';
import { Text, View, FlatList, Image, ScrollView, SafeAreaView, StyleSheet, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();




const HomeStack = createNativeStackNavigator();

function listado() {
  return (
    <HomeStack.Navigator initialRouteName="Listado">
      <HomeStack.Screen name="Listado" component={ListScreen} options={{ headerStyle:{backgroundColor:'#625204' }}} />
      <HomeStack.Screen name="Filtro" component={FiltroScreen} options={{ headerStyle:{backgroundColor:'#625204'} }} />
    </HomeStack.Navigator>

  );
}




   










const styles = StyleSheet.create({
  textos: {
    backgroundColor: '#6E510E',
  },
  imagenes:{
    width:200,
    height:200
  },
  view: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#EDC669",
    justifyContent: 'center'

  },
  touchable: {
    alignItems: "center",
    backgroundColor: "#EDC669",
    padding: 20
  },
  header: {
    backgroundColor: '#46350C',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  scrollview: {

    marginHorizontal: 20,
  }
});

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Historia') {
              iconName = focused
                ? 'body'
                : 'body';
            } else if (route.name === 'Listado') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
        })}
      >
        <Tab.Screen name="Historia" component={HistoryScreen} options={{ headerStyle: { backgroundColor: '#625204' } }} />
        <Tab.Screen name="Listado" component={listado} options={{ headerShown: false }} />

      </Tab.Navigator>
    </NavigationContainer>
  );

}
