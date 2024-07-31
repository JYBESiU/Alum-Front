import { news1, news2 } from "@/utils/dummy";
import useSWR from "swr";

export function useRecentNews() {
  // const { data, ...rest } = useSWR<{news: News[]}>(
  //   `/chat/chatrooms`
  // );

  return {
    news: data,
    // ...rest,
  };
}

const data = [news1, news2];
