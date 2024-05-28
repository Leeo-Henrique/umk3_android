import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, Image, useColorScheme } from "react-native";
import RenderCharacter from "../../components/renderCharacter/index";
import FilterCharacter from "../../components/filterCharacter/index";

import db from "../../data.json";

import { useEffect, useState } from "react";
import { Container, Logo, TextThemed, ViewStyled } from "../../css";
import ChangeTheme from "../../components/changeTheme";
import { AntDesign } from "@expo/vector-icons";
import { useNavigate } from "react-router-native";

let data = db.moves.slice().sort((a, b) => {
  return a.name.localeCompare(b.name);
});

export default function Characters() {
  const deviceTheme = useColorScheme();
  const [theme, setTheme] = useState(deviceTheme || "dark");
  const [chars, setChars] = useState(data);

  const changeTheme = () => {
    if (theme === "dark") return setTheme("light");
    if (theme === "light") return setTheme("dark");
  };
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
              margin: 4,
              border: 2,
              borderBlockColor: theme === "dark" ? "white" : "black",
              marginLeft: 15,
            }}
            size={24}
            color={theme === "dark" ? "white" : "black"}
          />
          <TextThemed theme={theme}>Busque Seu personagem</TextThemed>
          <ChangeTheme changeTheme={changeTheme} theme={theme} />
        </ViewStyled>
        <FilterCharacter setChars={setChars} data={data} theme={theme} />

        <FlatList
          data={chars}
          renderItem={({ item }) => (
            <RenderCharacter data={item} theme={theme} />
          )}
          keyExtractor={(item, i) => i.toString()}
        />
        <StatusBar style="auto" />
      </Container>
    </>
  );
}
