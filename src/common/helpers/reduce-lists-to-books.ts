import { IOverviewList, IBook } from "../models/overview";

export function reduceListsToBooks(lists: IOverviewList[]): IBook[] {
  return lists.reduce<IBook[]>((allBooks, list) => {
    const books = list.books;

    if (!books?.length) return allBooks;

    return [...allBooks, ...books];
  }, []);
}
