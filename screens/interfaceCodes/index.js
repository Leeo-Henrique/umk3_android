import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, Image, useColorScheme } from "react-native";
import { useEffect, useState } from "react";
import { Container, Logo, TextThemed, ViewStyled } from "../../css";
import ChangeTheme from "../../components/changeTheme";
import { AntDesign } from "@expo/vector-icons";
import { useNavigate } from "react-router-native";

import db from "../../data.json";
import { MovesChar } from "../../components/renderCharacter/styles";

let data = db.interfaceCodes.slice().sort((a, b) => {
  return a.name.localeCompare(b.name);
});

export default function InterfaceCodes() {
  const theme = 'dark'
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <StatusBar hidden />
      <Container theme={theme}>
        <Logo theme={theme} source={require("../../assets/umk_logo.png")} />
        <ViewStyled>
          <AntDesign
            name="back"
            onPress={navigateHome}
            style={{
              margin: 15,
              border: 2,
              borderBlockColor: theme === "dark" ? "white" : "black",

            }}
            size={24}
            color={theme === "dark" ? "white" : "black"}
          />
        </ViewStyled>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <MovesChar theme={theme}>
                {" "}
                {item.name} {item.combination}
              </MovesChar>
            </View>
          )}
          keyExtractor={(item, i) => i.toString()}
        />
      </Container>
    </>
  );
}
