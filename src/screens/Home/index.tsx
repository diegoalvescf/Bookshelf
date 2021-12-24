import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";

import {
  Container,
  Content,
  Footer,
  HeaderContainer,
  SearchContainer,
  Section,
  SectionContainer,
  SectionForYou,
  SectionTitle,
} from "./styles";

import { api } from "../../services/api";
import OverviewComponentCard from "../../components/OverviewComponentCard";
import { IBook, IOverview } from "../../common/models/overview";
import { IResponse } from "../../common/interfaces/response.interface";
import { reduceListsToBooks } from "../../common/helpers/reduce-lists-to-books";
import { user } from "../../mock/user";
import { ICategory } from "../../common/models/category";
import { Load } from "../../components/Load";
import CategoriesCard from "../../components/CategoriesCard";
import ButtonHome from "../../components/ButtonHome";

function Home({ navigation }) {
  const [books, setBooks] = useState<IBook[]>([]);
  const [errorBooks, setErrorBooks] = useState("");
  const [loadingBooks, setLoadingBooks] = useState(true);

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [errorCategories, setErrorCategories] = useState("");
  const [loadingCategories, setLoadingCategories] = useState(true);

  const [searchBook, setSearchBook] = useState("");
  // const [listBook, setListBook] = useState(books);

  async function loadBooks() {
    try {
      const overviewResponse = await api.get<IResponse<IOverview>>(
        "svc/books/v3/lists/overview.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR"
      );
      if (!overviewResponse.data?.results?.lists?.length) return;
      const books = reduceListsToBooks(overviewResponse.data.results.lists);

      setBooks(books);
    } catch (err) {
      setErrorBooks(err.message);
    } finally {
      setLoadingBooks(false);
    }
  }

  async function loadCategories() {
    try {
      const responseOverviewCategories = await api.get<IResponse>(
        "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR"
      );
      setCategories(responseOverviewCategories.data.results);
    } catch (err) {
      setErrorCategories(err.message);
    } finally {
      setLoadingCategories(false);
    }
  }

  const filterBooks = (item) => {
    return (
      item.author.toLowerCase().indexOf(searchBook.toLowerCase()) ||
      item.title.toLowerCase().indexOf(searchBook.toLowerCase()) > -1
    );
  };

  function handleBook(book: IBook) {
    navigation.navigate("Book", { book });
  }

  function handleCategory(category: ICategory) {
    navigation.navigate("Section", { category });
  }

  function handleHome() {
    navigation.navigate("Home");
  }

  useEffect(() => {
    // TODO: improve loading and cache, maybe with SWR
    if (!categories?.length) loadCategories();
    if (!books?.length) loadBooks();
  }, []);

  // TODO: improve performance
  const listBook = books.filter(filterBooks);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <HeaderContainer>
          <Header
            title="Bookshelf"
            profile={user}
            hideBackButton
            hideShareIcon
          />
        </HeaderContainer>

        <SearchContainer>
          <SearchInput
            placeholder="Qual livro você gostaria de ler hoje?"
            value={searchBook}
            onChangeText={(text) => setSearchBook(text)}
          />
        </SearchContainer>
        <Content>
          <SectionForYou>
            <SectionTitle>Para você</SectionTitle>
            <SectionContainer>
              {loadingBooks ? (
                <Load />
              ) : (
                <FlatList<IBook>
                  data={listBook}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <OverviewComponentCard
                      book={item}
                      onPress={() => handleBook(item)}
                    />
                  )}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              )}
            </SectionContainer>
          </SectionForYou>

          <Section>
            <SectionTitle>Categorias</SectionTitle>

            <SectionContainer>
              {loadingCategories ? (
                <Load />
              ) : (
                <FlatList<ICategory>
                  data={categories}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <CategoriesCard
                      category={item}
                      onPress={() => handleCategory(item)}
                    />
                  )}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              )}
            </SectionContainer>
          </Section>

          <Section>
            <SectionTitle>Os mais lidos da semana</SectionTitle>
            <SectionContainer>
              {loadingBooks ? (
                <Load />
              ) : (
                <FlatList<IBook>
                  data={books}
                  keyExtractor={(item, index) => String(index)}
                  renderItem={({ item }) => (
                    <OverviewComponentCard
                      book={item}
                      onPress={() => handleBook(item)}
                    />
                  )}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              )}
            </SectionContainer>
          </Section>
        </Content>
        <Footer>
          <ButtonHome onPress={() => handleHome()} />
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default Home;
