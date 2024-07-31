import { ChatRoom } from "@/types/message";
import { chatroom1, chatroom2 } from "@/utils/dummy";
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

const data = [chatroom1, chatroom2];
