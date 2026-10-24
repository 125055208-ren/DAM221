import { StyleSheet, View, Text, Button } from 'react-native';

export default function SafeScreens({ onBack }) {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Práctica 10</Text>
        <Text style={styles.equipo}>Diego & Saul</Text>
        
        <Button title="⬅ Regresar al Menú" onPress={onBack} color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  titulo: { fontSize: 20, fontWeight: 'bold' },
  equipo: { fontSize: 14, color: '#666', marginBottom: 20 }
});