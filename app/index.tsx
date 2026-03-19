import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native';

export default function HomeScreen() {
  const [nome, setNome] = useState('');
  const [imagemIndex, setImagemIndex] = useState(0);

  const imagens = [
    'https://i.pravatar.cc/300?img=1',
    'https://i.pravatar.cc/300?img=2'
  ];

  const alternarImagem = () => {
    setImagemIndex(imagemIndex === 0 ? 1 : 0);
  };

  const salvarPerfil = () => {
    Alert.alert('Perfil salvo!', `Nome: ${nome}`);
  };

  return (
    <View style={styles.container}>

      {/* TOPO */}
      <View style={styles.topo}>
        <Image
          source={{ uri: imagens[imagemIndex] }}
          style={styles.imagem}
        />

        <TouchableOpacity style={styles.botaoSecundario} onPress={alternarImagem}>
          <Text style={styles.textoBotao}>Trocar Foto</Text>
        </TouchableOpacity>
      </View>

      {/* MEIO */}
      <View style={styles.meio}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      {/* BASE */}
      <View style={styles.base}>
        <TouchableOpacity style={styles.botaoPrincipal} onPress={salvarPerfil}>
          <Text style={styles.textoBotaoPrincipal}>Salvar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20
  },

  topo: {
    alignItems: 'center',
    gap: 10
  },

  imagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#38bdf8'
  },

  meio: {
    width: '100%'
  },

  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#38bdf8'
  },

  base: {
    width: '100%'
  },

  botaoPrincipal: {
    width: '100%',
    height: 60,
    backgroundColor: '#22c55e',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },

  botaoSecundario: {
    marginTop: 10,
    backgroundColor: '#334155',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8
  },

  textoBotao: {
    color: '#fff',
    fontSize: 14
  },

  textoBotaoPrincipal: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
