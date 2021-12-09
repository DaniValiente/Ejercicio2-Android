import * as React from 'react';
import { Text, View, FlatList,Image,ScrollView,SafeAreaView,StyleSheet, TouchableOpacity, TextInputBase,TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();





const HomeStack = createNativeStackNavigator();

function listado() {
  return (
    <HomeStack.Navigator initialRouteName="Historia">
      <HomeStack.Screen name="Listado" component={ListScreen} options={{ headerStyle: { backgroundColor: '#46350C' } }} />
      <HomeStack.Screen name="Historia" component={HistoryScreen} options={{ headerStyle: { backgroundColor: '#46350C' } }} />
    </HomeStack.Navigator>

  );
}
const InfoStack = createNativeStackNavigator();

function Info({navigation}) {
  return (

    <View style={styles.view}>
      <Text>Busca aqui tus usarios por edad</Text>
      <Text>Edad</Text>
      <TextInput
        style={styles.input}
        placeholder="Edad"
        keyboardType="numeric"
      />
       <Button
        title="Buscar"
        onPress={() => navigation.navigate('Listado')}
      />

      </View>
  )
  
}

function HistoryScreen() {

  return (

    <SafeAreaView style={styles.view}>
      <ScrollView style={styles.scrollview}>
      <Text>Bienvenido a la historia de los dispositivos, este es primer móvil que salió al mercado</Text>
      <Image source={{uri: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/02/16155009/Motorola-DynaTAC-SF-1024x768.jpg'}}
       style={{width: 200, height: 200}} />
      <Text>Este es el movil mas vendido hasta la actualidad</Text>
      <Image source={{uri: 'https://m.media-amazon.com/images/I/41E2HB43R6L._AC_SS450_.jpg'}}
       style={{width: 200, height: 200}} />
      <Text>Este es el último Iphone</Text>
      <Image source={{uri: 'https://static.k-tuin.com/media/catalog/product/cache/1/image/0dc2d03fe217f8c83829496872af24a0/c/o/comprar-nuevo-iphone-13-pro-max-color-oro-128gb.jpg'}}
       style={{width: 200, height: 200}} />
      <Text>Y este el último modulo que ha sacado Samsung</Text>
      <Image source={{uri: 'http://img.pccomponentes.com/articles/34/348294/1130-samsung-galaxy-s21-5g-128gb-rosa-libre-especificaciones.jpg'}}
       style={{width: 200, height: 200}} />
     </ScrollView>
    </SafeAreaView>
  );

}
function ListScreen({ navigation }) {

  function pintar({ item }) {
    return (
      <View style={styles.view} >
       <Text>Busca aqui tus usuarios por edad</Text>
       <Text>Edad</Text>
       <TextInputBase></TextInputBase>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('Details', { item: item })} >
          <Text  >{item.nombre}</Text>
        </TouchableOpacity>
      </View>

    )
  }
  return (

    <View>
      <FlatList
        data={DATA}
        renderItem={pintar}
        kayExtractor={item => item.id} />
    </View>
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
  
    marginHorizontal:20,
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
        <Tab.Screen name="Historia" component={listado} options={{ headerStyle: { backgroundColor: '#625204' } }} />
        <Tab.Screen name="Listado" component={Info} options={{ headerStyle: { backgroundColor: '#625204' } }} />

      </Tab.Navigator>
    </NavigationContainer>
  );

}


