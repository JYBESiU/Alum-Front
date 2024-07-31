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

const news1 = {
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
    "https://kr.object.ncloudstorage.com/message-audio/audio-1722368134072.mp3",
};

const news2 = {
  id: 2,
  title: "[올림픽] 최세빈, 펜싱 여자 사브르 개인전 4위",
  summary:
    "티몬과 위메프가 판매 대금 2100억 원 지급 못해\
  기업회생 신청은 불가피\
  법원은 향후 회생 절차 개시 여부를 결정 예정\
  큐텐 지분 매각 등을 통해 사태를 수습 가능성 열려\
  정부는 긴급 자금 5600억 원을 투입 결정",
  imageUrl:
    "https://image.zdnet.co.kr/2024/07/27/d973bf4bdbaaef11f27f58ebb54729a1-watermark.jpg",
  voiceUrl:
    "https://kr.object.ncloudstorage.com/message-audio/audio-1722368134072.mp3",
};

const data = [news1, news2];
