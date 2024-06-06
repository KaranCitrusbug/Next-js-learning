import NewsList from "@/components/news/news-main"
import { getLatestNews } from "@/service/newsService"

export default function LatestNews(){
    const latestNews = getLatestNews()
    return(
        <>
        <h1>Latest News</h1>
        <NewsList news= {latestNews}/>
        </>
    )
}