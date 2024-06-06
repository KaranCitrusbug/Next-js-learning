import { notFound } from "next/navigation";
import Link from "next/link";
import { DummyProps } from "@/types/dummy-types";
import { DUMMY_NEWS } from "@/db";

export default function MyNews({ params }: { params: { slug: string } }) {
  const newsId: string = params.slug;
  const thisNews = DUMMY_NEWS.find((newsItem : DummyProps) => newsItem.slug == newsId);
  if(!thisNews){
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsId}/image`} >
          <img src={`/images/news/${thisNews?.image}`} alt={thisNews?.title} />
        </Link>
        <h1>{thisNews?.title}</h1>
        <time dateTime={thisNews?.date}>{thisNews?.date}</time>
      </header>
      <p>{thisNews?.content}</p>
    </article>
  );
}
