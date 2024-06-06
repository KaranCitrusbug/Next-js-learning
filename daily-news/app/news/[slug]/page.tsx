import { DUMMY_NEWS } from "@/db";
import { notFound } from "next/navigation";

export default function MyNews({ params }: { params: { slug: string } }) {
  const newsId: string = params.slug;
  const thisNews = DUMMY_NEWS.find((newsItem) => newsItem.slug == newsId);
  if(!thisNews){
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${thisNews?.image}`} alt={thisNews?.title} />
        <h1>{thisNews?.title}</h1>
        <time dateTime={thisNews?.date}>{thisNews?.date}</time>
      </header>
      <p>{thisNews?.content}</p>
    </article>
  );
}
