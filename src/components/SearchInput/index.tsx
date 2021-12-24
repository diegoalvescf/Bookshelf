import React from "react";

import { TextInputProps } from "react-native";
import { Container, Input, Search } from "./styles";

type Props = TextInputProps;

function SearchInput({ ...rest }: Props) {
  return (
    <Container>
      <Input {...rest} />

      <Search />
    </Container>
  );
}

export default SearchInput;
