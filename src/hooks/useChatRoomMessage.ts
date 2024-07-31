import { Message } from "@/types/message";
import useSWR from "swr";

export function useChatRoomMessage(chatroomId: number) {
  const { data, ...rest } = useSWR<Message[]>(
    isNaN(chatroomId)
      ? null
      : `/chat/messages?chatroomId=${chatroomId}`
  );

  return {
    messages: data,
    ...rest,
  };
}
