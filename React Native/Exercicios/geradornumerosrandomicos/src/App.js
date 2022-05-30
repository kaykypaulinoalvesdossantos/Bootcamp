import React , {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';



export default function App() {

  const [numero, setNumero] = useState(0)

  function handleNumero(){

      const novo_numero = Math.floor(Math.random() * 10);

      setNumero(novo_numero)

  }

  return (
    <SafeAreaView style={style.conteiner}>
        <Text style={style.numero}>{numero}</Text>
        <TouchableOpacity onPress={handleNumero} style={style.butao}>
          <Text style={style.textBtn}>Gerar Número</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}





const style = StyleSheet.create({
  conteiner :{
    alignItems:"center",
    justifyContent:'center',
    flex:1,
    backgroundColor:'#c9c9c9'
  },
  butao:{
    backgroundColor:'red',
    padding:20,
    marginTop:30,
    borderRadius:5,
  },
  numero:{
    fontSize: 38,
    fontWeight: 'bold',
  },
  textBtn:{
    color:'#fff',
    fontWeight: 'bold',
    fontSize: 20
  }
});