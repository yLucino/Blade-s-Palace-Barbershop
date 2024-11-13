import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { News } from "../../../app/shared/models/news";
import { getNews } from "../../services/forHomeWebSite/newsPage.service";

const NewsSection = () => {
  const [ allNews, setAllNews ] = useState<News[]>([]);

  useEffect(() => {
    const getAllNews = async () => {
      try {
        const response = await getNews();
        setAllNews(response);
      } catch (error) {
        console.log('Error in get all news from backend', error);
      }
    }

    getAllNews()
  }, [])

  return(
    <>
      {/* Fazer display Grid 2cols 2rows - Responsive */}
      <div className="flex flex-wrap ml-10 mr-10 justify-center items-center gap-6">
        {/* Fazer layout se não tiver nenhuma novidade */}
        {/* Fazer popUp pedindo se o user quer ver as novidades */}
        {allNews.map((news, index) => (
          <Link to={`/novidades/${news.id}`} key={index}>
            <div className="bg-GrayLight hover:bg-GrayBlue hover:scale-105 transition-all cursor-pointer flex rounded-lg">
              <img className="w-32 2xl:w-80 lg:w-60 sm:w-40 rounded-tl-lg rounded-bl-lg object-cover" src={news.imageUrl} alt={news.subTitle} />
              <div className="flex flex-col justify-between m-5">
                <div>
                  <h1 className="font-AntonSC text-Yellow text-2xl pl-1">{news.title}</h1>
                  <hr className="border-Yellow mt-1 mb-2"/>
                  <h2 className="pl-1 text-Yellow font-semibold">{news.subTitle}</h2>
                  <div className="overflow-x-hidden overflow-y-scroll mt-2 mb-5 max-h-28">
                    <p className="max-w-96 mr-2 text-sampleText text-sm pl-1">{news.description}</p>
                  </div>
                </div>
                <div className="flex w-full bottom-0 justify-end">
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default NewsSection;