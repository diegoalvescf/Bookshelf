export interface IOverview {
  bestsellers_date: string; // YYYY-MM-DD
  published_date: string; // YYYY-MM-DD
  lists: IOverviewList[];
}

export interface IOverviewList {
  list_id: number;
  list_name: string;
  display_name: string;
  updated: string;
  list_image: string;
  books: IBook[];
}

export interface IBook {
  publisher: string;
  author: string;
  title: string;
  description: string;
  price: string;
  book_image: string;
}
