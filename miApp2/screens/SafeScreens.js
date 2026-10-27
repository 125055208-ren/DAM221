import { StyleSheet, View, Text, Button, ScrollView, SafeAreaView, SafeAreaViewBase } from 'react-native';

export default function SafeScreens({ onBack }) {
  const canciones = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  ];
  return(
    <SafeAreaView
    style={styles.container}>

    <Text style={styles.titulo}>MUSICA</Text>

    <View>
      <Style={styles.reproductor}>
      <Text style={styles.texto}>Lista de MUSICA</Text>

      <Text>La musica mas escuchada</Text>
</View>

    <Text style={styles.subtitulo}>Canciones disponibles</Text>
    <ScrollView style={styles.lista}>
      {canciones.map((item, index) =>( 
        <View key={index}
        style={styles.tarjeta}>
          <Text
        style={styles.textoLista}>{item}</Text>
          </View>
  ))}
  </ScrollView>
  </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f4f4',
    padding:20,
  },

  titulo: { fontSize: 20, fontWeight: 'bold' },
  equipo: { fontSize: 14, color: '#666', marginBottom: 20 },
  reproductor:{
    backgroundColor:'White',
    padding:20,
    borderRadius:15,
    alignItems:'center',
  },
  texto:{
    fon,
fontSize:20,
fontWeight:'bold',
marginBottom:10,
},

subtitulo:{
  fontSize:20,
  fontWeight:'bold',
  marginTop:20,
  marginBottom:10,
  textAlign:'center',
},
lista:{
  flex:1,
},
tarjeta:{
 backgroundColor:'White',
 padding:20,
 borderRadius:15,
},

textoLista:{
  fontSize:18,
  textAlign:'center'
},
});