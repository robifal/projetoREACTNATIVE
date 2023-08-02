import {Text} from 'react-native';

 function Meuapp() {
  return (
    <>
      <Text>Hellow world</Text>
      <Text>IFAL</Text>
      <Gato/>
      <Gato/>
      <Gato/>
    </>
  );
}

const Gato = () => {
  return (
      <Text>Gatos</Text>
  )
}

export default Meuapp;

