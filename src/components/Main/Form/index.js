import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Form() {
  return (
    <View>
      <Text>Altura</Text>

      <TextInput
        placeholder='Digite uma altura'
        keyboardType='numeric'
      />

      <TextInput
        placeholder='Digite um Peso'
        keyboardType='numeric'
      />

      <Button
        title='Calcular'
      />

    </View>
  );
}