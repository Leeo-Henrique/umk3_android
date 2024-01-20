import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// import { Container } from './styles';

const ChangeTheme = ({ theme, changeTheme }) => {
  return (
    <Ionicons
      name="bulb"
      onPress={changeTheme}
      style={{
        margin: 4,
        border: 2,
        borderBlockColor: theme === "dark" ? "white" : "black",
        marginLeft: 15,
      }}
      size={24}
      color={theme === "dark" ? "white" : "black"}
    ></Ionicons>
  );
};

export default ChangeTheme;
