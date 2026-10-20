/*1.Zona Importaciones*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import{Saludo} from './components/Saludo.js';
import{Saludo2} from './components/Saludo2.js';
import { Perfil } from './components/Perfil.js';


/*2.Zona Render o Main*/
export default function App() {
  return (
    <View style={styles.container}>
    
<Perfil style={styles.tarjetas1} nombre="Lulu" carrera="TIID" materia="Apps Moviles" cuatri="4" />

<Perfil style={styles.tarjetas2} nombre="Renata" carrera="TIID" materia="Apps Moviles" cuatri="4"/>

<Perfil style={styles.tarjetas3} nombre="Luisa" carrera="TIID" materia="Apps Moviles" cuatri="4"/>



    </View>
  );
}


/*3.Zona de estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#f5f4f4',
    flexDirection:'row-reverse',
    alignItems: 'center',

    justifyContent: 'center',
  },
  tarjetas1:{backgroundColor:'pink'},
  tarjetas2:{backgroundColor:'blue'},
  tarjetas3:{backgroundColor:'yellow'},
  
});
