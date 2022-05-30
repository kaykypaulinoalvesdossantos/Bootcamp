import React from "react";
import { Alert, Image, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import foto from "./assets/perfil.jpg";
import Icon from "react-native-vector-icons/Feather";

export default function App() {

  function handleRedeSocial(rede_social){

    switch(rede_social){
      case 'linkedin':
        Alert.alert('Meu Linkedin','https://www.linkedin.com/in/kayky-paulino/')
      break
      case 'instagram':
        Alert.alert('Meu Instagram','https://www.instagram.com/kayky_paulino/')
      break
      case 'github':
        Alert.alert('Meu GitHub','https://github.com/kaykypaulinoalvesdossantos')
      break
    }
  }


  return (
    <>
      <View style={styles.page}>
        <View style={styles.container_cabesalho}>
          <Image source={foto} style={styles.foto} />
          <Text style={styles.nome}>KAYKY PAULINO</Text>
          <Text style={styles.funcao}>Desenvolvedor Front e Mobile</Text>
          <View style={styles.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
            <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
            <Icon name="instagram" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
            <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card_conteiner}>
          <View style={styles.card}>
            <View style={styles.card_header}>
              <Text>Skils</Text>
            </View>
            <View style={styles.card_content}>
              <Text style={styles.card_content_text}>Web Disgner UX / UI</Text>
              <Text style={styles.card_content_text}>Python</Text>
              <Text style={styles.card_content_text}>Java</Text>
              <Text style={styles.card_content_text}>JavaScript | React Native</Text>
            </View>
          </View>
        </View>
        <View style={styles.card_conteiner}>
          <View style={styles.card}>
            <View style={styles.card_header}>
              <Text>Formação Academica</Text>
            </View>
            <View style={styles.card_content}>
              <Text style={styles.card_content_text}>Impacta - Ciencia da computação</Text>
              <Text style={styles.card_content_text}>Curso em video - Java,Python,HTML | CSS</Text>
              <Text style={styles.card_content_text}>DIO - JavaScript, React Native, HTML | CSS</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E7E7E7",
    flex: 1,
  },
  container_cabesalho: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 15,
  },
  funcao: {
    color: "#939393",
    marginBottom: 15,
  },
  redes_sociais: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
    marginTop: 20,
  },
  card_conteiner:{
    width:'100%',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 20
  },
  card: {
    width: "60%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#939393",
    padding: 10,
    backgroundColor: '#fff'
  },
  card_content:{
    marginTop:20,
  },
  card_content_text:{
    color: '#939393',
    marginBottom: 10,
  }
});
