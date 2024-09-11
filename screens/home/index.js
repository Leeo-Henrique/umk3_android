import React from "react";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import { useNavigate } from "react-router-native";
import { Container } from "./styles";
import { TextThemed } from "../../css";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  const theme = 'dark'
  const screenHeight = Dimensions.get("window").height;
  const navigate = useNavigate();

  const goToCharacters = () => {
    navigate("/characters");
  };
  const goToInterfaceCodes = () => {
    navigate("/interface");
  };
  
  return (
    <>
    <StatusBar hidden />
    <Container height={screenHeight} theme={theme}>
      <TouchableOpacity onPress={goToCharacters}>
        <View>
          <Image style={{width:150,height:150}} source={require("../../assets/characters/kabal.png")} />
          <TextThemed style={{textAlign:"center"}}theme={theme}>Personagens</TextThemed>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToInterfaceCodes}>
        <Image style={{width:150,height:150}} source={require("../../assets/interface.png")} />
        <View>
          <TextThemed style={{textAlign:"center"}} theme={theme}>Interface</TextThemed>
        </View>
      </TouchableOpacity>
    </Container>
    </>
  );
}
