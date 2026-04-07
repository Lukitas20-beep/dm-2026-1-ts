import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BorderRadius, Colors, FontSize, Spacing } from '@/constants/theme';

const PROFILE_IMAGES = [
  'https://i.pravatar.cc/300?img=12',
  'https://i.pravatar.cc/300?img=32',
];

const IMAGE_SIZE = 150;

type ProfileScreenProps = {
  onBack: () => void;
};

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  const [name, setName] = useState('');
  const [imageIndex, setImageIndex] = useState(0);

  const toggleImage = () => setImageIndex((prev) => (prev === 0 ? 1 : 0));

  const handleSave = () => {
    Alert.alert('Perfil Salvo', `Nome: ${name || '(sem nome)'}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Topo: imagem circular */}
        <Image
          source={{ uri: PROFILE_IMAGES[imageIndex] }}
          style={styles.profileImage}
          resizeMode="cover"
        />

        {/* Toggle entre as duas fotos */}
        <View style={styles.toggleButton}>
          <Button title="Trocar Foto" onPress={toggleImage} color={Colors.slate[500]} />
        </View>

        {/* Meio: campo de nome */}
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor={Colors.slate[400]}
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          returnKeyType="done"
        />

        {/* Base: botão salvar */}
        <View style={styles.saveButton}>
          <Button title="Salvar" onPress={handleSave} color={Colors.blue[500]} />
        </View>

        <View style={styles.backButton}>
          <Button title="Voltar" onPress={onBack} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.slate[50],
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing['3xl'],
  },
  profileImage: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
    borderWidth: 3,
    borderColor: Colors.blue[500],
  },
  toggleButton: {
    marginTop: Spacing.xl,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.slate[300],
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing['2xl'],
    paddingVertical: Spacing.xl,
    fontSize: FontSize.lg,
    color: Colors.slate[900],
    backgroundColor: Colors.white,
    marginTop: Spacing['3xl'],
  },
  saveButton: {
    width: '100%',
    marginTop: Spacing['3xl'],
  },
  backButton: {
    marginTop: Spacing.md,
  },
});
