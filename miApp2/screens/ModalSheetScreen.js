import { StyleSheet, Text, View, Button } from 'react-native';

export default function ModalSheetScreen({ onBack }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Modal & Bottom Sheet</Text>
      <Text style={styles.equipo}>Equipo: Daniela Ramirez Mercado</Text>

      <View style={styles.contenido}>
        <Text>Aquí va la práctica con ventanas modales y hojas inferiores.</Text>
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