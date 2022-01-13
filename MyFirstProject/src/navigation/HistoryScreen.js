import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

export default function historiaScreen(){
    return(
        <View>
            <ScrollView  style={style.centrado}>
                <Text style={style.textoCabecera}>Bienvenido a la historia de los dispositivos móviles</Text>
                <View>
                    <Image
                        style={{width: 250, height:350}}
                        source={require('../images/Samsung_Galaxy_Note.png')}/>
                        <Text style={style.texto}>Fecha de lanzamiento</Text><Text>2011</Text>
                        <Text style={style.texto}>Historia</Text><Text>A diferencia de la pantalla Super AMOLED Plus, la HD Super AMOLED ofrece mayor resolución y mayor detalle de imágenes. Esa pantalla usa una matriz de píxeles patentada por Samsung y llamada PenTile.</Text>
                        <Text style={style.texto}>Conclusion</Text><Text>El terminal cuenta con un accesorio, un lápiz táctil hecho por Wacom para su pantalla capacitiva que posee una "ranura" o hueco hecho en el terminal para insertarlo; Samsung ha diseñado una aplicación para dibujar y apuntar notas a mano con el terminal.</Text>
                </View>
                <View>
                    <Image
                        style={{width: 250, height:350}}  
                        source={require('../images/Samsung_Galaxy_Note_II.png')}/>
                         <Text style={style.texto}>Fecha de lanzamiento</Text><Text>2012</Text>
                        <Text style={style.texto}>Historia</Text><Text>Está en un punto intermedio entre los teléfonos inteligentes (smartphones) como el Samsung Galaxy sIII y los tablets como el Samsung Galaxy Tab 7. Es denominado "phablet" en inglés, debido a su gran tamaño que lo diferencia de los teléfonos ordinarios, así como de su relativamente pequeño tamaño si lo comparamos con los tablets.</Text>
                        <Text style={style.texto}>Conclusion</Text><Text>La pantalla HD Super AMOLED de 5,5" del GALAXY Note II te proporciona mayor nitidez y un ratio de 16:9, para que disfrutes siempre de la mejor experiencia visual. Su innovador diseño incluye una pantalla más grande, pero mantiene el mismo aspecto delgado para que encaje perfectamente en tu mano.</Text>
                </View>
                <View>
                    <Image
                        style={{width: 250, height:350}}
                        source={require('../images/Samsung_Galaxy_Note_3.png')}/>
                        <Text style={style.texto}>Fecha de lanzamiento</Text><Text>2013</Text>
                        <Text style={style.texto}>Historia</Text><Text>El Samsung Galaxy Note 3 es un teléfono inteligente de gama alta fabricado y diseñado por Samsung, el cual funciona con el sistema operativo Android Jelly Bean en su versión 4.3, está disponible en dos principales variantes N900 y N9005 (ver más abajo), fue presentado el 4 de septiembre de 2013 en la IFA como sucesor del Samsung Galaxy Note II, en la serie Note de Samsung Galaxy.</Text>
                        <Text style={style.texto}>Conclusion</Text><Text>El Galaxy Note 3 tiene su 2ª versión (Samsung Galaxy Note 3 Neo) que a diferencia del Note 3, vuelve el USB 2.0 y el diseño de la cámara es diferente. Viene con Android 4.3 Jelly Bean actualizable a 4.4 KitKat. Samsung ha anunciado que el Note 3 Neo actualizará a Android 5.0 Lollipop a mitades de Junio/Julio de 2015.</Text>
                </View>
                <View>
                    <Image
                        style={{width: 250, height:350}}
                        source={require('../images/Samsung_Galaxy_Alpha.png')} />
                        <Text style={style.texto}>Fecha de lanzamiento</Text><Text>2014</Text>
                        <Text style={style.texto}>Historia</Text><Text>El Galaxy Alpha recibió críticas mixtas; aunque elogiado por su construcción y diseño de mayor calidad en comparación con productos anteriores, el dispositivo fue criticado por sus modestas especificaciones en comparación con su contraparte principal, el Galaxy S5, y por tener un precio demasiado alto por lo que consideraban un teléfono inteligente de "gama media"</Text>
                        <Text style={style.texto}>Conclusion</Text><Text>El diseño general del Galaxy Alpha es una evolución del Galaxy S5, que incorpora un marco de metal achaflanado y una cubierta trasera de plástico con hoyuelos.​ Con un grosor de 6.7 mm (0.26 in) En ese momento, el Galaxy Alpha era el teléfono inteligente más delgado de la compañía</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const style=StyleSheet.create({
    centrado:{
        marginTop: 25,
        textAlign: 'center',
        marginLeft:50,
        marginRight:50,
        fontSize: 16
    },
    textoCabecera:{
        fontSize:28,
        textAlign: 'center',
        fontWeight: 'bold'
        
    },
    texto:{
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontWeight:'bold'
        
    }


})