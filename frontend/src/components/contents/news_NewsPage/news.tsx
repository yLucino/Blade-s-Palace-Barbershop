import { useEffect, useState } from "react";
import { NewsModel } from "../../../app/shared/models/news";
import { getNews } from "../../services/forHomeWebSite/newsPage.service";
import { Button } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';

const News = () => {
  const [ allNews, setAllNews ] = useState<NewsModel[]>([]);
  const [ hasNewsStatus, setHasNewsStatus ] = useState(Boolean);
  const [ reRender, setReRender ] = useState(false)

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
    setReRender(false)
  }, [reRender])

  useEffect(() => {
    if (allNews.length > 0) {
      setHasNewsStatus(true);
    } else {
      setHasNewsStatus(false);
    }
  }, [allNews])

  const handleRefreshClick = () => {
    setReRender(true);
  }

  return(
    <>
      <div className="container-news flex flex-wrap ml-10 mr-10 p-3 pb-3 justify-center gap-5 overflow-y-hidden 3xl:overflow-y-scroll 3xl:h-550 h-auto">
        {hasNewsStatus === true ? (
          <>
            {allNews.map((news, index) => (
              <div className="bg-GrayLight hover:bg-GrayBlue hover:scale-105 transition-all cursor-pointer flex rounded-lg max-h-60" key={index}>
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
            ))}
          </>
        ) : (
          <div className="flex flex-col gap-5 justify-center self-center p-10 rounded-lg bg-GrayLight">
            <h1 className="text-gray-400 text-sm">Tudo em ordem, nenhum aviso e nenhuma novidade até o momento! Volte aqui outra hora. </h1>
            <Button variant="outlined" size="small" onClick={() => handleRefreshClick()}>
              Atualizar
              <RefreshIcon />
            </Button>
          </div>          
        )}
      </div>
    </>
  )
}

export default News;