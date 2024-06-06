"use client";


import { notFound,useRouter } from "next/navigation";
import { DummyProps } from "@/types/dummy-types";
import { DUMMY_NEWS } from "@/db";

export default function InterceptedImageDisplay({
  params,
}: {
  params: { slug: string };
}) {
  const newsImage = params.slug;
  const router = useRouter()
  const thisNews = DUMMY_NEWS.find(
    (newsItem: DummyProps) => newsItem.slug == newsImage
  );
  if (!thisNews) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={router.back}/>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${thisNews.image}`}
            alt={`${thisNews.title}`}
          />
        </div>
      </dialog>
    </>
  );
}
