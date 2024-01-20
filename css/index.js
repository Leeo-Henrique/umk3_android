import styled from "styled-components/native";

import {
  black,
  darkblue,
  blue,
  dark,
  darkgrey,
  grey,
  white,
  cyan,
  white2,
} from "./variables";

export const TextThemed = styled.Text`
  font-size: 20px;
  color: ${(props) => (props.theme === "dark" ? white : darkgrey)};
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => (props.theme === "dark" ? black : white)};
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  background-color: black;
  width: 100%;
  height: 150px;
`;

export const ViewStyled = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`