import {Text} from 'react-native';

 function Meuapp() {
  return (
    <>
      <Text>Hellow world</Text>
      <Text>IFAL</Text>
      <Gato nome="Robert" idade={19}/>
      <Gato nome="Marie" idade={4}/>
      <Gato nome="Holnstons" idade={7}/>
    </>
  );
}

const Gato = ({nome,idade}) => {


  return (
      <Text>Eu sou um Gato. E Meu nome é {nome.toUpperCase()} e eu tenho {idade} {idade === 1 ? " ano" : " anos"}.</Text>
  )
}

export default Meuapp;

