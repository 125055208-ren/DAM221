import { StyleSheet, Text, View, Button } from 'react-native';

export default function PressableSwitchScreen({ onBack }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pressable & Switch</Text>
      <Text style={styles.equipo}>Equipo: Alvaro David Castro Ortega & Alan Damian Cuapio Serrano</Text>

      <View style={styles.contenido}>
        <Text>Aquí va el desarrollo del componente Pressable y Switch.</Text>
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