import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { reduceListsToBooks } from "../../common/helpers/reduce-lists-to-books";
import { IResponse } from "../../common/interfaces/response.interface";
import { ICategory } from "../../common/models/category";
import { IBook, IOverview, IOverviewList } from "../../common/models/overview";
import Header from "../../components/Header";
import { Load } from "../../components/Load";
import OverviewComponentCard from "../../components/OverviewComponentCard";
import { api } from "../../services/api";

import { Container, Content, HeaderContainer, Teste } from "./styles";

interface Params {
  category: ICategory;
}

function Section({ navigation }) {
  const [books, setBooks] = useState<IBook[]>([]);
  const [errorBooks, setErrorBooks] = useState("");
  const [loadingBooks, setLoadingBooks] = useState(true);

  const route = useRoute();
  const { category } = route.params as Params;

  const list_name_encoded = category.list_name_encoded;

  async function loadBooksCategories() {
    try {
      const overviewResponse = await api.get<IResponse<IOverviewList>>(
        `https://api.nytimes.com/svc/books/v3/lists/current/${list_name_encoded}.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR`
      );

      setBooks(overviewResponse.data.results.books);
    } catch (err) {
      setErrorBooks(err.message);
    } finally {
      setLoadingBooks(false);
    }
  }

  function handleBook(book: IBook) {
    navigation.navigate("Book", { book });
  }

  useEffect(() => {
    loadBooksCategories();
  }, []);
  return (
    <Container>
      <HeaderContainer>
        <Header title={category.list_name} hideShareIcon />
      </HeaderContainer>
      <Content>
        {loadingBooks ? (
          <Load />
        ) : (
          <FlatList<IBook>
            data={books}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <Teste>
                <OverviewComponentCard
                  book={item}
                  onPress={() => handleBook(item)}
                />
              </Teste>
            )}
            numColumns={3}
          />
        )}
      </Content>
    </Container>
  );
}
export default Section;
