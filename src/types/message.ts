export type Message = {
  id: number;
  isUser: boolean;
  isFeedback?: boolean;
  content: string;
  feedback?: string;
  voiceUrl?: string;
  chatroom?: ChatRoom;
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
