import NewsList from "@/components/news/news-main";
import { DUMMY_NEWS } from "@/db";
export default function NewsDetail() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news = {DUMMY_NEWS}/>
    </>
  );
}
