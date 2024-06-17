import Link from "next/link";
import { DummyProps } from "@/types/dummy-types";
import { getNewsForYear } from "@/service/newsService";
import { getAvailableNewsYears } from "@/service/newsService";
import NewsList from "@/components/news/news-main";

export default function FilteredNews({ params }: { params: { year: string } }) {
  const yearNews = params.year;
  const filterYear = yearNews ? yearNews[0] : undefined;
  let news :DummyProps[];
  let newsContent = <p>Select any year from above for Archive news.</p>;
  const availableYear = getAvailableNewsYears();
  if (filterYear) {
    news = getNewsForYear(filterYear);

    if (news && news.length > 0) {
      newsContent = <NewsList news={news} />;
    }
  }

  if (filterYear && !getAvailableNewsYears().includes(+filterYear)) {
    throw new Error("Invalid Path");
  }
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {availableYear.map((year) => (
              <li key={year}>
                <Link href={`/archive/${year}`}>{year}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
