import styled from "styled-components/native";
import {
  darkblue,
  blue,
  dark,
  darkgrey,
  grey,
  white,
  cyan,
  white2,
} from "../../css/variables";

export const TextInput = styled.TextInput`
  border-color: ${(props) => (props.theme === "dark" ? white : dark)};
  color: ${(props) => (props.theme === "dark" ? white : dark)};

  margin-top: 10px;
  width: 80%;
  border-width: 1px;
  padding-left: 10px;
  height: 44px;
`;
export const ClearSearch = styled.TouchableHighlight`
  border-color: ${(props) => (props.theme === "dark" ? white : dark)};
  width: 12%;
  justify-content: center;
  align-items: center;
  `;

export const Container = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  
`


