import { ChatRoom } from "@/types/message";
import useSWR from "swr";

export function useChatList() {
  // const { data, ...rest } = useSWR<{chatrooms: ChatRoom[]}>(
  //   `/chat/chatrooms`
  // );

  return {
    chatRooms: data,
    // ...rest,
  };
}

const chatroom1 = {
  id: 1,
  title: "빵집 아르바이트 중 손님맞이",
  description:
    "빵집 아르바이트 중 소금빵을 찾는 손님을 만났다.",
  myrole: "가게 점원",
  airole: "손님",
  chatsubject: "아르바이트 중 손님맞이",
};

const chatroom2 = {
  id: 1,
  title: "두근두근 마음 전하기",
  description:
    "같은 반 친구에게 한국어로 좋아하는 마음을 고백한다.",
  myrole: "가게 점원",
  airole: "손님",
  chatsubject: "아르바이트 중 손님맞이",
};

const data = [chatroom1, chatroom2];
