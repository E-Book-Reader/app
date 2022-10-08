export interface Highlight {
  start: number;
  end: number;
}

export interface Note {
  content: string;
  highlights: Highlight[];
}

export interface Notes {
  bookId: string;
  pages: { [key: number]: Note };
}

export interface ContentInterface {
  type:
    | "Code"
    | "Paragraph"
    | "Image"
    | "Quiz"
    | "List" /*we can also do nested lists*/;
  data: JSX.Element | string;
}

export interface DocumentSection {
  title: string;
  content: ContentInterface[] | DocumentSection[];
}

export interface ArticleInterface {
  id: string;
  title: string;
  image: string;
  published: Date;
  authorId: string;
  numbered: boolean /*will be putten automatically*/;
  contents: DocumentSection[];
}

export const articles: ArticleInterface[] = [
  {
    id: "123",
    numbered: false,
    image: "image.png",
    published: new Date(),
    authorId: "037374121436",
    title: "Raiden's Article",
    contents: [
      {
        title: "My First Title",
        content: [
          {
            type: "Paragraph",
            data: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        aliquid, reiciendis in expedita omnis dignissimos laudantium vel
        ullam. Accusantium tempore rerum commodi consequatur, laborum autem
        ducimus error ratione ipsa quod!`,
          },
        ],
      },
      {
        title: "My Second Title",
        content: [
          {
            type: "Paragraph",
            data: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        aliquid, reiciendis in expedita omnis dignissimos laudantium vel
        ullam. Accusantium tempore rerum commodi consequatur, laborum autem
        ducimus error ratione ipsa quod!`,
          },
        ],
      },
      {
        title: "My Third Title",
        content: [
          {
            title: "Another Third Title - First",
            content: [{ type: "Code", data: "yoo am a code" }],
          },
          {
            title: "Another Third Title - Second",
            content: [{ type: "Code", data: "yoo am a code" }],
          },
        ],
      },
    ],
  },
];

export const booksNotes: Notes[] = [
  {
    bookId: "123",
    pages: {
      1: {
        content: "This is first page notes",
        highlights: [{ start: 15, end: 35 }],
      },
      4: {
        content: "Et la je lui est mit un gros coup de tete",
        highlights: [{ start: 10, end: 45 }],
      },
    },
  },
  {
    bookId: "456",
    pages: {
      1: {
        content: "This is first page notes",
        highlights: [{ start: 15, end: 35 }],
      },
      4: {
        content: "Et la je lui est mit un gros coup de tete",
        highlights: [{ start: 10, end: 45 }],
      },
    },
  },
  {
    bookId: "798",
    pages: {
      1: {
        content: "This is first page notes",
        highlights: [{ start: 15, end: 35 }],
      },
      4: {
        content: "Et la je lui est mit un gros coup de tete",
        highlights: [{ start: 10, end: 45 }],
      },
    },
  },
  {
    bookId: "987",
    pages: {
      1: {
        content: "This is first page notes",
        highlights: [{ start: 15, end: 35 }],
      },
      4: {
        content: "Et la je lui est mit un gros coup de tete",
        highlights: [{ start: 10, end: 45 }],
      },
    },
  },
];
