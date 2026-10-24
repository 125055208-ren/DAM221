 import { StyleSheet, Text, View, Button } from 'react-native';

export default function TextInputAlertScreen({ onBack }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TextInput & Alert</Text>
      <Text style={styles.equipo}>Equipo: Olmos uribe luisa Renata</Text>

      <View style={styles.contenido}>
        <Text>Aquí va el desarrollo de la práctica con TextInput y Alert.</Text>
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
/*import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';

export default function App() {
  // ---- STATE: aquí se guarda lo que el usuario escribe ----
  const [nombre, setNombre] = useState('');      // texto normal
  const [password, setPassword] = useState('');  // contraseña

  // ---- ALERT simple: un solo botón de "OK" ----
  const saludar = () => {
    if (nombre.trim() === '') {
      Alert.alert('Campo vacío', 'Por favor escribe tu nombre antes de continuar.');
      return;
    }
    Alert.alert('Tu práctica funciona correctamente.`);
  };

  // ---- ALERT con varios botones (confirmar / cancelar) ----
  const confirmarBorrado = () => {
    Alert.alert(
      'Confirmar',                         // title
      '¿Seguro que quieres borrar los datos?', // message
      [                                    // buttons
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Borrar',
          style: 'destructive',
          onPress: () => {
            setNombre('');
            setPassword('');
            Alert.alert('Listo', 'Los datos fueron borrados.');
          },
        },
      ],
      { cancelable: true }                 // options
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>TextInput & Alert</Text>
      <Text style={styles.subtitulo}>Práctica guiada en React Native</Text>

      
      /*<Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        placeholderTextColor="#9aa0a6"
        value={nombre}                 // prop VALUE (ligada al state)
        onChangeText={setNombre}       // prop ONCHANGETEXT (actualiza el state)
        maxLength={30}                 // máximo de caracteres
        autoCapitalize="words"         // primera letra en mayúscula
      />
      <Text style={styles.ayuda}>Lo que escribes se guarda en el estado: "{nombre}"</Text>

      
      /*<Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe una contraseña"
        placeholderTextColor="#9aa0a6"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}         // oculta el texto (puntos)
        keyboardType="default"
      />

      
     /* <TouchableOpacity style={styles.boton} onPress={saludar}>
        <Text style={styles.botonTexto}>Saludar (Alert simple)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.boton, styles.botonRojo]}
        onPress={confirmarBorrado}
      >
        <Text style={styles.botonTexto}>Borrar datos (Alert con opciones)</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    padding: 24,
    justifyContent: 'center',
  },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#1a73e8', textAlign: 'center' },
  subtitulo: { fontSize: 15, color: '#5f6368', textAlign: 'center', marginBottom: 28 },
  label: { fontSize: 16, fontWeight: '600', color: '#202124', marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#dadce0',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 6,
  },
  ayuda: { fontSize: 13, color: '#1a73e8', marginBottom: 18 },
  boton: {
    backgroundColor: '#1a73e8',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  botonRojo: { backgroundColor: '#d93025' },
  botonTexto: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
});*/