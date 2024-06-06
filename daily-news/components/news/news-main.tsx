import Link from "next/link";
import { DummyProps } from "@/types/dummy-types";
import { DUMMY_NEWS } from "@/db";

import style from "./page.module.css";

export default function NewsList({ news }: { news: DummyProps[] }) {
  return (
    <ul className={style["news-list"]}>
      {news.map((newItem: DummyProps) => (
        <li key={newItem.id}>
          <Link href={`/news/${newItem.slug}`}>
            <img src={`/images/news/${newItem.image}`} alt={newItem.title} />
            <span>{newItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
