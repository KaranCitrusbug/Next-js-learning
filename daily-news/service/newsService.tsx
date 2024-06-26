import { DummyProps } from "@/types/dummy-types";
import { DUMMY_NEWS } from "@/db";

export  function getAllNews(){
    return DUMMY_NEWS;
}

export function getLatestNews(){
  const latestNews = Math.floor(Math.random() * 5);
    return DUMMY_NEWS.slice(latestNews,5);
}

export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce((years : number[], news :DummyProps ) => {
    const year  = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a : number, b :number ) => b - a);
}

export function getAvailableNewsMonths(year : string) {
  return DUMMY_NEWS.reduce((months : number[], news : DummyProps) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month )) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a: number, b:number) => b - a);
}

export function getNewsForYear(year : string) {
  return DUMMY_NEWS.filter(
    (news: DummyProps) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year : string, month:string) {
  return DUMMY_NEWS.filter((news : DummyProps) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}