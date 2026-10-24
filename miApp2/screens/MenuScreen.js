import { StyleSheet, Text, Button, ScrollView } from 'react-native';
import { useState } from 'react';

// Importación correcta desde la misma carpeta 'screens'
import SafeScrollScreen from './SafeScrollScreen';
import PressableSwitchScreen from './PressableSwitchScreen';
import TextInputAlertScreen from './TextInputAlertScreen';
import ListasScreen from './ListasScreen';
import BackgroundSplashScr from './BackgroundSplashScr';
import ModalSheetScreen from './ModalSheetScreen';
import ActivityKeyboardScreen from './ActivityKeyboardScreen';

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    
    const goMenu = () => setScreen('menu');

    switch (screen) {
        case 'tarjetas':
            return <TarjetasScreen onBack={goMenu} />;
        case 'safescroll':
            return <SafeScrollScreen onBack={goMenu} />;
        case 'pressableswitch':
            return <PressableSwitchScreen onBack={goMenu} />;
        case 'textinputalert':
            return <TextInputAlertScreen onBack={goMenu} />;
        case 'listas':
            return <ListasScreen onBack={goMenu} />;
        case 'backgroundsplash':
            return <BackgroundSplashScr onBack={goMenu} />;
        case 'modalsheet':
            return <ModalSheetScreen onBack={goMenu} />;
        case 'activitykeyboard':
            return <ActivityKeyboardScreen onBack={goMenu} />;
        case 'menu':
        default:
            return (
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.titulo}>Menú de Prácticas</Text>

                    <Button title="Tarjetas (Perfil)" onPress={() => setScreen('tarjetas')} />
                    <Button title="SafeArea & ScrollView" onPress={() => setScreen('safescroll')} />
                    <Button title="Pressable & Switch" onPress={() => setScreen('pressableswitch')} />
                    <Button title="TextInput & Alert" onPress={() => setScreen('textinputalert')} />
                    <Button title="FlatList & SectionList" onPress={() => setScreen('listas')} />
                    <Button title="ImageBackground & SplashScreen" onPress={() => setScreen('backgroundsplash')} />
                    <Button title="Modal & Bottom Sheet" onPress={() => setScreen('modalsheet')} />
                    <Button title="ActivityIndicator & Keyboard" onPress={() => setScreen('activitykeyboard')} />
                </ScrollView>
            );
    }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    gap: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#222',
  }
});