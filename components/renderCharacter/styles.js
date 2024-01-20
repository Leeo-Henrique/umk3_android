import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { darkblue,blue,dark,darkgrey,grey,white,cyan, white2 } from "../../css/variables";
export const Card = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  image: {
    width: 200,
    height: 200,
    objectFit: "contain",
  },
});

export const TextChar = styled.Text`
  font-size: 20px;
  color: ${(props)=> props.theme === 'dark' ? white: darkgrey};
`
export const MovesChar = styled.Text`
  font-size: 20px;
  color: ${(props)=> props.theme === 'dark' ? white2: darkgrey};
`
export const SpecialTexts = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props)=> props.theme === 'dark' ? white: cyan};
`
export const Container = styled.View`
  width: ${(props) => props.width + "px"};
  padding: 20px;
  
`