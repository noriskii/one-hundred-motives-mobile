import 'react-native-gesture-handler';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import api from '../services/api';

function ResponseScreen({ route, navigation }) {
  const [motiveDesc, setMotiveDesc] = useState('');
  const { motiveNumber } = route.params;

  useEffect(() => {
    async function handleMotives() {
      const response = await api.get(`/motive/${motiveNumber}`)

      console.log(response.data)

      setMotiveDesc(response.data)
    }

    handleMotives()
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={[styles.motiveNumberStyle, { transform: [{ translateY: -30 }] }]}>
          {motiveDesc.motiveNumber}
        </Text>
        <Text style={styles.motiveDescStyle}>
          "{motiveDesc.motive}"
        </Text>
        <Text style={styles.generic}>
          Você Ganha:
        </Text>
        <Text style={styles.rewardStyle}>
          {motiveDesc.reward}
        </Text>
      </View>
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
  box: {
    alignSelf: 'stretch',
    borderWidth: 5,
    borderColor: '#FF9090',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  motiveNumberStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    borderColor: '#FF9090',
    borderRadius: 100,
    backgroundColor: '#FF9090',
    fontSize: 24,
    width: 58,
    height: 58,
    color: '#555',
  },
  motiveDescStyle: {
    fontStyle: 'italic',
    alignSelf: 'center',
    fontSize: 28,
    paddingBottom: 20,
    color: '#555',
  },
  rewardStyle: {
    alignSelf: 'center',
    fontSize: 18,
    paddingBottom: 20,
    color: '#555',
  },
  generic: {
    alignSelf: 'center',
    color: '#555',
  }
});

export default ResponseScreen