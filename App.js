import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title/';
import Form from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

// sempre importar StyleSheet para estilizar components
const styles = StyleSheet.create({
  container: {
    // ocupar 100% da tela
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 30,
  },
});
