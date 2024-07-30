import { ChatRoom } from "@/types/message";
import useSWR from "swr";

export function useChatRoomMessage(chatroomId: number) {
  // const { data, ...rest } = useSWR<ChatRoom>(
  //   `/chat/messages?chatroomId=${chatroomId}`
  // );

  return {
    chatRoom: data,
    // ...rest,
  };
}

const message1 = {
  id: 10,
  isUser: false,
  content: "여기 소금빵 있나요?",
  url: "https://kr.object.ncloudstorage.com/message-audio/audio-1722332910598.mp3",
};
const message2 = {
  id: 11,
  isUser: true,
  content:
    "저기 보이시는 초코빵 left에 있어요. 오늘 fifteen percent 할인 합니다.",
  url: "https://kr.object.ncloudstorage.com/message-audio/audio-1722332910598.mp3",
};

const data = {
  id: 1,
  title: "빵집 아르바이트 중 손님맞이",
  description:
    "빵집 아르바이트 중 소금빵을 찾는 손님을 만났다.",
  myrole: "가게 점원",
  airole: "손님",
  chatsubject: "아르바이트 중 손님맞이",
  messages: [
    message1,
    message2,
    message1,
    message2,
    message1,
    message2,
    message1,
    message2,
    message1,
    message2,
  ],
};
