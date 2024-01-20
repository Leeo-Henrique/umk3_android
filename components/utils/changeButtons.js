export const replaceToRightButtons = (data, controlStyle) => {
    const { combos, finalRoundSpecial } = data;

    switch (controlStyle) {
      case "ps2":
        combos.forEach((item) => {
          const string = item.combination
            .replaceAll("Y", "▢")
            .replaceAll("X", "△")
            .replaceAll("A", "O")
            .replaceAll("B", "X");
          item.combination = string;
        });
        finalRoundSpecial.forEach((item) => {
          const string = item.combination
            .replaceAll("Y", "▢")
            .replaceAll("X", "△")
            .replaceAll("A", "O")
            .replaceAll("B", "X");
          item.combination = string;
        });
        data.transformations &&
          data.transformations.forEach((item) => {
            const string = item.combination
              .replaceAll("Y", "▢")
              .replaceAll("X", "△")
              .replaceAll("A", "O")
              .replaceAll("B", "X");
            item.combination = string;
          });
        break;

      case "xbox":
        combos.forEach((item) => {
          const string = item.combination
            .replaceAll("Y", "▢")
            .replaceAll("X", "△")
            .replaceAll("A", "O")
            .replaceAll("B", "X");
          item.combination = string;
        });
        finalRoundSpecial.forEach((item) => {
          const string = item.combination
            .replaceAll("Y", "▢")
            .replaceAll("X", "△")
            .replaceAll("A", "O")
            .replaceAll("B", "X");
          item.combination = string;
        });
        data.transformations &&
          data.transformations.forEach((item) => {
            const string = item.combination
              .replaceAll("Y", "▢")
              .replaceAll("X", "△")
              .replaceAll("A", "O")
              .replaceAll("B", "X");
            item.combination = string;
          });
        break;
      default:
        break;
    }
  };