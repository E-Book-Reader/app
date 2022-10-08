interface ContentInterface {
  type:
    | "Code"
    | "Text"
    | "Image"
    | "Quiz"
    | "List" /*we can also do nested lists*/;
  data: JSX.Element | string;
}

interface DocumentSection {
  title: string;
  content: ContentInterface[] | DocumentSection[];
}

interface ArticleInterface {
  title: string;
  image: string;
  published: Date;
  authorId: string;
  numbered: boolean /*will be putten automatically*/;
  contents: DocumentSection[];
}

const article: ArticleInterface = {
  numbered: false,
  image: "image.png",
  published: new Date(),
  authorId: "037374121436",
  title: "Raiden's Article",
  contents: [
    {
      title: "My First Title",
      content: [{ type: "Text", data: "yoo am a description" }],
    },
    {
      title: "My Second Title",
      content: [{ type: "Text", data: "yooo am a description" }],
    },
    {
      title: "My Third Title",
      content: [
        {
          title: "Another Third Title - First",
          content: [{ type: "Code", data: "yoo am a description" }],
        },
        {
          title: "Another Third Title - Second",
          content: [{ type: "Code", data: "yoo am a description" }],
        },
      ],
    },
  ],
};
