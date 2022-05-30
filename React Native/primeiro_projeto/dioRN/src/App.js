import React from "react";
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable,Linking} from 'react-native';

const App = () => {
    
    const handlePressGoToGitgub = async () =>{
      const res = await Linking.canOpenURL(urlToGihub);
      if(res){
        await Linking.openURL(urlToGihub);
      }
    }

    return <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
        <View style={style.content}>
            <Image 
                accessibilityLabel="Kayky com roupa formal e fundo de folhas"
                style={style.avatar} 
                source={{uri:imageProfileGithub}}
            />

            <Text 
            accessibilityLabel="Nome kayky paulino"
            style={[style.defaltText, style.name]}>
                kayky paulino
            </Text>
            <Text 
            accessibilityLabel="Nick name kaykypaulinoalvesdossantos"
            style={[style.defaltText, style.nikeName]}>
                kaykypaulinoalvesdossantos
            </Text>
            <Text 
            accessibilityLabel="Descrição Programador Front-End | HTML , CSS , JavaScript | Estudante do Curso Ciências da Computação na Faculdade Impacta."
            style={[style.defaltText, style.description]}>
                Programador Front-End | HTML , CSS , JavaScript | Estudante do Curso Ciências da Computação na Faculdade Impacta.
            </Text>
            <Pressable onPress={handlePressGoToGitgub}>
            <View style={style.button}>
                <Text style={[style.defaltText, style.textButton]}>
                    GitHub
                </Text>
            </View>
            </Pressable>
        </View>;
    </SafeAreaView>
}

export default App;

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorFontGithubDark = '#4F565E';
const imageProfileGithub = "https://avatars.githubusercontent.com/u/98046923?v=4";
const urlToGihub = 'https://github.com/kaykypaulinoalvesdossantos';

const style = StyleSheet.create({
    container:{ 
        backgroundColor:colorGithub,
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        padding: 20,
    },
    content:{
        alignItems: 'center',
    },
    avatar:{
        height:200,
        width:200,
        borderRadius:100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaltText:{
        color:colorFontGithub
    },
    name:{
        marginTop: 20,
        fontWeight:'bold',
        fontSize:24,
    },
    nikeName:{
        fontSize:18,
        color:colorFontGithubDark,
    },
    description:{
        fontWeight:'bold',
        fontSize:14,
    },
    button:{
        marginTop:20,
        backgroundColor:colorFontGithubDark,
        borderRadius: 10,
        padding: 20,
    },
    textButton:{
        fontWeight:'bold',
        fontSize: 16,
    }
})
