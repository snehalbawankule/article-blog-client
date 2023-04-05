export type Article = {
  id: number;
  title: string;
  description: string;
  content: string;
  url: string;
  edited: string;
  createdAt: Date;
  updatedAt: Date;
  likes: [
    {
      id: string;
      userEmail: string;
      createdAt: Date;
      updatedAt: Date;
    }
  ];
  comments: [
    {
      commentId: string;
      userName: string;
      rating: number;
      comment: string;
      isReply: boolean;
      replyTo: string;
      createdAt: Date;
      updatedAt: Date;
    }
  ];
};

export type defaultState = {
  article: Article[];
};
export const defaultArticle: Article = {
  id: 0,
  title: "",
  description: "",
  content: "",
  url: "",
  edited: "",
  createdAt: new Date("2023-10-02"),
  updatedAt: new Date("2023-10-02"),

  likes: [
    {
      id: "",
      userEmail: "",
      createdAt: new Date("2023-10-02"),
      updatedAt: new Date("2023-10-02"),
    },
  ],
  comments: [
    {
      commentId: "",
      userName: "",
      rating: 0,
      comment: "",
      isReply: false,
      replyTo: "",
      createdAt: new Date("2023-10-02"),
      updatedAt: new Date("2023-10-02"),
    },
  ],
};
