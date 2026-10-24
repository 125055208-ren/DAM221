import { StyleSheet, Text, View, Button } from 'react-native';

export default function BackgroundSplashScr({ onBack }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ImageBackground & SplashScreen</Text>
      <Text style={styles.equipo}>Equipo: Bersain Benoit Rubio Guerrero</Text>

      <View style={styles.contenido}>
        <Text>Aquí va la práctica de imágenes de fondo y pantalla de carga.</Text>
      </View>

      <Button title="⬅ Regresar al Menú" onPress={onBack} color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f5f4f4' },
  titulo: { fontSize: 20, fontWeight: 'bold' },
  equipo: { fontSize: 13, color: '#666', textAlign: 'center', marginBottom: 20 },
  contenido: { marginBottom: 20 }
});