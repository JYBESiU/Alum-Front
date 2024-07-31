import { News } from "@/types/news";

export function useNews(newsId: number) {
  // const { data, ...rest } = useSWR<{news: News[]}>(
  //   `/chat/chatrooms`
  // );

  return {
    news: news1,
    // ...rest,
  };
}

const news1: News = {
  id: 1,
  title: "[속보] 티몬·위메프, 법원에 기업회생 신청",
  summary:
    "티몬과 위메프가 판매 대금 2100억 원 지급 못해\
    기업회생 신청은 불가피\
    법원은 향후 회생 절차 개시 여부를 결정 예정\
    큐텐 지분 매각 등을 통해 사태를 수습 가능성 열려\
    정부는 긴급 자금 5600억 원을 투입 결정",
  imageUrl:
    "https://image.zdnet.co.kr/2024/07/27/d973bf4bdbaaef11f27f58ebb54729a1-watermark.jpg",
  voiceUrl:
    "https://kr.object.ncloudstorage.com/message-audio/sampleaudio.mp3",
  question:
    "티몬과 위메프가 2024년 7월 29일 법원에 신청한 것은?",
  choices: [
    "새로운 제품 출시",
    "기업회생",
    "광고 캠페인",
    "직원 채용",
    "할인 행사",
  ],
  answer: "기업회생",
};