import React from 'react';
import {TextInput, Text, View, Button,FlatList} from 'react-native'

function ListScreen({ navigation}) {
    const [instrumento, onChangeText] = React.useState(null);

    const users = [{ id: 1, nombre: 'Antonio Romero', edad: 32, género: 'Masculino', instrumento: 'Saxofón' },

{ id: 2, nombre: 'Sara Durán', edad: 35, género: 'Femenino', instrumento: 'Violín' },

{ id: 4, nombre: 'Raul Coronado', edad: 21, género: 'Masculino', instrumento: 'Trompeta' },

{ id: 5, nombre: 'Isabel Sánchez', edad: 45, género: 'Femenino', instrumento: 'Piano' },

{ id: 6, nombre: 'Josefa Navarro', edad: 77, género: 'Femenino', instrumento: 'Violín' },

{ id: 7, nombre: 'Juan Pedrosa', edad: 19, género: 'Masculino', instrumento: 'Saxofón' },

{ id: 9, nombre: 'Ramon Rey', edad: 50, género: 'Masculino', instrumento: 'Trompeta' },

{ id: 10, nombre: 'Esther Barros', edad: 33, género: 'Femenino', instrumento: 'Trompeta' },

{ id: 11, nombre: 'Ignacio Villalba', edad: 56, género: 'Masculino', instrumento: 'Piano' },

{ id: 12, nombre: 'Roberto Soria', edad: 42, género: 'Masculino', instrumento: 'Saxofón' },

{ id: 13, nombre: 'Cristina Macia', edad: 25, género: 'Femenino', instrumento: 'Guitarra' },

{ id: 14, nombre: 'Erica Escudero', edad: 39, género: 'Femenino', instrumento: 'Guitarra' },

{ id: 15, nombre: 'Angel Lima', edad: 63, género: 'Masculino', instrumento: 'Guitarra' }]
    
    return (
      <View style={styles.view} >
        <Text style={{marginRight:295}}>Instrumento</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={instrumento}
          keyboardType="default"
        />
        <Button
          title="Buscar"
          onPress={() => navigation.navigate('Filtro', { instrumento: instrumento }
          )} 
        />
        <FlatList
          data={users}
          renderItem={MostrarPersonas}
          keyExtractor={item => item.id}
        />
      </View>
    )
  
      function MostrarPersonas({ item }) {
          return <View style={styles.viewmusicos}>
             <Image source={{ uri: 'https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png' }}
            style={styles.perfil} />
            <Text>{item.nombre}</Text>
            <Text style={styles.instrumento} >{item.instrumento}</Text>
          </View>
    
        }
      }
      const styles = StyleSheet.create({
        textos: {
    
          fontWeight:'bold'
        },
        view: {
          flex: 1,
          alignItems: 'center',
          backgroundColor: "#EDC669",
          justifyContent: 'center',
          padding:20
      
        },
        viewmusicos:{
          flex: 1,
          alignItems: 'center',
          backgroundColor: "#EDC669",
          justifyContent: 'center',
          borderBottomColor: 'blue',
          borderBottomWidth: 2,
          padding:10
               
        },
        perfil:{
          width: 75, 
          height: 75 ,
          marginRight:300
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
          width:200
        },
        imagenes:{
          width: 200, 
          height: 200 
        },
        scrollview: {
      
          marginHorizontal: 20,
        },
        instrumento:{
          color:'red'
        }
      }),

 
    
    export default ListScreen;