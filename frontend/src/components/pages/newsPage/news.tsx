import NewsSection from "../../contents/news_NewsPage/news";

const News = () => {
  return(
    <>
      <div className="containerPage-news flex flex-col h-full 3xl:h-screen pb-20 bg-Gray justify-center" id="novidades">
        <div className='title text-4xl'>
          <h1>Novidades</h1>
        </div>
        <NewsSection />
      </div>
    </>
  )
}

export default News;