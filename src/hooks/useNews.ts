import { News } from "@/types/news";
import useSWR from "swr";

export function useNews(theme?: number) {
  const { data, ...rest } = useSWR<News[]>(
    theme === undefined
      ? "/news/recommend"
      : `/news/recommend?theme=${theme}`
  );

  return {
    news: data,
    ...rest,
  };
}
