export type Message = {
  id: number;
  isUser: boolean;
  content: string;
  feedback?: string;
  userId?: number;
  url?: string;
};

export type ChatRoom = {
  id: number;
  createdAt?: Date;
  title: string;
  description: string;
  myrole: string;
  airole: string;
  chatsubject: string;
  messages?: Message[];
};
