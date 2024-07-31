export type News = {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  voiceUrl: string;
};

export type Quiz = {
  id: number;
  newsId: number;
  question: string;
  choices: string[];
  answer: string;
};
