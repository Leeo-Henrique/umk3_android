import React, { useState } from "react";
import { View,  TouchableHighlight, Text} from "react-native";
import {  ClearSearch, Container, TextInput } from "./styles";
import { AntDesign } from "@expo/vector-icons";

const FilterCharacter = ({ setChars, data, theme}) => {
  const [textFiltered,setTextFiltered] = useState('')

  const filterChar = (e) => {
    setTextFiltered(e)
    if (e === "") return setChars(data);
    const searchedChar = data.filter((char) =>
      char.name.toLowerCase().includes(e.toLowerCase())
    );
    if (searchedChar.length > 0) {
      return setChars(searchedChar);
    }
  };
  
  return (
    <Container 
    // style={Container.view}
    >
      <TextInput
        theme={theme}
        placeholderTextColor={theme === 'dark'? "white": 'black'}
        onChangeText={filterChar}
        value={textFiltered}
        placeholder="Liukang"
        keyboardType="ascii-capable"
      />
      <ClearSearch 
        theme={theme} 
        onPress={() => {
        setTextFiltered('')
        setChars(data);
      }}>
        <View>
          <AntDesign name="closecircleo" size={24} color={theme === 'dark'? "white": 'black'} />
        </View>
      </ClearSearch>
    </Container>
  );
};

export default FilterCharacter;
