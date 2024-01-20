import React, { useEffect } from "react";
import { View, Image, FlatList, Text, Dimensions } from "react-native";
import { Card, Container,TextChar,SpecialTexts, MovesChar } from "./styles";
import { removeNameFromString } from "../utils/removeNameFromString";
import { replaceToRightButtons } from "../utils/changeButtons";
import { imagens } from "../utils/importImages";

const RenderCharacter = ({ data, controlStyle = "snes", theme }) => {
  const name = removeNameFromString(data.image)
  useEffect(() => {
    replaceToRightButtons(data, controlStyle);
  }, [data]);

  const { width, height } = Dimensions.get("window");

  
  return (
    <Container width={width}>
      <Image style={Card.image} source={imagens[name]}/>
      <TextChar theme={theme}>{data.name}</TextChar>
      <SpecialTexts theme={theme}>Combos</SpecialTexts>
      <FlatList
        data={data.combos}
        renderItem={({ item }) => (
          <View >
            <MovesChar theme={theme}>
              {" "}
              {item.name} {item.combination}
            </MovesChar>
          </View>
        )}
        keyExtractor={(item, i) => i.toString()}
      />

      <SpecialTexts theme={theme}>Golpes Fatais</SpecialTexts>
      <FlatList
        data={data.finalRoundSpecial}
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
      {data.transformations && (
        <>
          <Text style={Card.specialTexts}>Transformações</Text>
          <FlatList
            data={data.transformations}
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
        </>
      )}
    </Container>
  );
};

export default RenderCharacter;
