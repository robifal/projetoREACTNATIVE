import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Funcionando beleza, e funcionando de forma explendidade e muito mais funcional belezal.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b55555',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
