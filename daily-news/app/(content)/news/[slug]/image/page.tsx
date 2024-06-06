import { notFound } from "next/navigation";
import { DummyProps } from "@/types/dummy-types";
import { DUMMY_NEWS } from "@/db";

export default function ImageDisplay({params} : {params :{slug:string}}){
    const newsImage = params.slug;
    const thisNews = DUMMY_NEWS.find((newsItem : DummyProps) => newsItem.slug == newsImage);
  if(!thisNews){
    notFound();
  }
    return(
        <div className="fullscreen-image">
            <img src={`/images/news/${thisNews.image}`} alt={`${thisNews.title}`} />
        </div>

    )
}