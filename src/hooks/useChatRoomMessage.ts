import { ChatRoom } from "@/types/message";
import { message1, message2 } from "@/utils/dummy";
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
