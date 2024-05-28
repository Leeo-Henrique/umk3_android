import styled from "styled-components/native";
import { darkblue,blue,dark,darkgrey,grey,white,cyan, white2 } from "../../css/variables";
export const Container = styled.View`
  display: flex;
  width: 100%;
  height: ${props => `${props.height}px`};
  background-color:  ${(props)=> props.theme === 'dark' ? dark: white2};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:30px;
`;
