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


function ListScreen({ navigation }) {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.view} >
      <Text>Busca aqui tus usuarios por edad</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="EDAD"
        keyboardType="numeric"
      />
      <Button
        title="Search"
        onPress={() => navigation.navigate('Filtro', { number: number }
        )}
      />
    </View>

  )
}
function FiltroScreen({ navigation, route }) {
  const users = [
    { id: 1, name: 'Antonio Morlanes', age: 34, sex: 'Varón' },
    { id: 2, name: 'Margarita Fuentes', age: 29, sex: 'Mujer' },
    { id: 4, name: 'Manuel Machado', age: 51, sex: 'Varón' },
    { id: 5, name: 'Cai Lun', age: 81, sex: 'Varón' },
    { id: 6, name: 'Manuela Aparicia', age: 19, sex: 'Varón' },
    { id: 7, name: 'Manuel Lara', age: 20, sex: 'Varón' },
    { id: 9, name: 'Álvaro Andrade', age: 43, sex: 'Varón' },
    { id: 10, name: 'Ángel Andrade', age: 23, sex: 'Varón' },
    { id: 11, name: 'Araceli Castillo', age: 61, sex: 'Mujer' },
    { id: 12, name: 'Sara Sacristán', age: 49, sex: 'Mujer' },
    { id: 13, name: 'Esther Arroyo', age: 18, sex: 'Mujer' },
    { id: 14, name: 'Martina Danta', age: 45, sex: 'Mujer' },
    { id: 15, name: 'Julia Praena', age: 38, sex: 'Mujer' },
    { id: 16, name: 'Pedro Flecha', age: 53, sex: 'Varón' },
    { id: 17, name: 'Miguel Berral', age: 60, sex: 'Varón' },
    { id: 18, name: 'Lorena Aparicio', age: 53, sex: 'Mujer' },
    { id: 19, name: 'David Toral', age: 61, sex: 'Varón' },
    { id: 20, name: 'Daniel Cifuentes', age: 52, sex: 'Varón' }
  ]

  function filtrar({ item }) {

    if (item.age == route.params.number) {
      return <View style={styles.view}>
        <Text>{item.name}</Text>
        <Text>{item.age}</Text>
      </View>

    }
  }

  return (

    <View style={styles.view}>
      <FlatList
        data={users}
        renderItem={filtrar}
        keyExtractor={item => item.id}
      />
      <Button
        title="Volver"
        onPress={() => navigation.navigate('Listado'
        )}
      />
    </View>
  )
}


function HistoryScreen() {

  return (

    <SafeAreaView style={styles.view}>
      <ScrollView style={styles.scrollview}>
        <Text>Bienvenido a la historia de los dispositivos, este es primer móvil que salió al mercado (Motorola DynaTAC 8000X )</Text>
        <Image source={{ uri: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/02/16155009/Motorola-DynaTAC-SF-1024x768.jpg' }}
          style={{ width: 200, height: 200 }} />
        <Text>Este es el movil mas vendido hasta la actualidad (NOKIA 1100)</Text>
        <Image source={{ uri: 'https://m.media-amazon.com/images/I/41E2HB43R6L._AC_SS450_.jpg' }}
          style={{ width: 200, height: 200 }} />
        <Text>Este es el último Iphone (IPHONE 13 PRO MAX)</Text>
        <Image source={{ uri: 'https://static.k-tuin.com/media/catalog/product/cache/1/image/0dc2d03fe217f8c83829496872af24a0/c/o/comprar-nuevo-iphone-13-pro-max-color-oro-128gb.jpg' }}
          style={{ width: 200, height: 200 }} />
        <Text>Y este el último modulo que ha sacado Samsung (SAMSUNG S21)</Text>
        <Image source={{ uri: 'http://img.pccomponentes.com/articles/34/348294/1130-samsung-galaxy-s21-5g-128gb-rosa-libre-especificaciones.jpg' }}
          style={{ width: 200, height: 200 }} />
      </ScrollView>
    </SafeAreaView>
  );

}





const styles = StyleSheet.create({
  textos: {
    backgroundColor: '#6E510E',
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


