import 'react-native-gesture-handler';

import { useState } from 'react';
import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native';

function HomeScreen({ navigation }) {
  const [motiveNumber, setMotiveNumber] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite o motivo retirado"
        placeholderTextColor="#999"
        style={styles.input}
        value={motiveNumber}
        onChangeText={setMotiveNumber}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Response', {
            motiveNumber: motiveNumber,
          });
        }}
        style={styles.button}
      >

        <Text style={styles.buttonText}>Agora aperte aqui!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7FFFD4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FF9090',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
    color: '#000'
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FF9090',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default HomeScreen