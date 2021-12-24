import React, { useMemo } from "react";
import { TouchableOpacityProps } from "react-native";
import { generateColor } from "../../common/helpers/randomColors";
import { ICategory } from "../../common/models/category";

import { Container, Rectangle, Title } from "./styles";

interface CategoryProps extends TouchableOpacityProps {
  category: ICategory;
}

function CategoriesCard({ category, ...rest }: CategoryProps) {
  const color = useMemo(() => generateColor(), []);

  return (
    <Container {...rest}>
      <Rectangle style={{ backgroundColor: color }} />
      <Title>{category.list_name}</Title>
    </Container>
  );
}

export default CategoriesCard;
