export type News = {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  voiceUrl: string;
  question: string;
  choices?: string[];
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;

  answer: string;
};
