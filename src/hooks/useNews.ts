import { News } from "@/types/news";
import { news1 } from "@/utils/dummy";

export function useNews(newsId: number) {
  // const { data, ...rest } = useSWR<{news: News[]}>(
  //   `/chat/chatrooms`
  // );

  return {
    news: news1,
    // ...rest,
  };
}
