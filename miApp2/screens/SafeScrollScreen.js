import { StyleSheet, Text, View, ScrollView, SafeAreaView, Button } from 'react-native';

export default function SafeScrollScreen({ onBack }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.titulo}>SafeAreaView & ScrollView</Text>
        <Text style={styles.equipo}>Equipo: Diego Carreño García & Alain Alejandro García Arias</Text>

        <View style={styles.contenido}>
          <Text>Aquí va el desarrollo de la práctica 10.</Text>
        </View>

        <Button title="⬅ Regresar al Menú" onPress={onBack} color="#841584" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f4f4' },
  scroll: { padding: 20, alignItems: 'center', gap: 15 },
  titulo: { fontSize: 20, fontWeight: 'bold' },
  equipo: { fontSize: 13, color: '#666', textAlign: 'center' },
  contenido: { marginVertical: 20 }
});