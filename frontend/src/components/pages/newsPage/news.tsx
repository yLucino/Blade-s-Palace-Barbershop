import NewsSection from "../../contents/news_NewsPage/newsSection";

const News = () => {
  return(
    <>
      <div className="h-screen bg-Gray" id="novidades">
        <div className='title text-4xl'>
          <h1>Novidades</h1>
        </div>
        <NewsSection />
      </div>
    </>
  )
}

export default News;