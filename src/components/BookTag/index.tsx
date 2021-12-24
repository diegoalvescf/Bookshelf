import React from "react";

import { Container, Text } from "./styles";

interface BookTagProps {
  title: string;
}

function BookTag({ title }: BookTagProps) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}

export default BookTag;
