import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../navigation/ListScreen';
import FiltroScreen from '../navigation/FiltroScreen';
const HomeStack = createNativeStackNavigator();

function listado() {
  return (
    <HomeStack.Navigator initialRouteName="Listado">
      <HomeStack.Screen name="Listado" component={ListScreen}
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
     
      <HomeStack.Screen name="Filtro" component={FiltroScreen} 
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
    </HomeStack.Navigator>

  );
}
export default listado;
