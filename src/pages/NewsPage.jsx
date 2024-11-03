import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import NewsArticles from "../components/NewsArticles";
import { fetchNewsByCategory } from "../api/api";

const NewsPage = () => {
  const { category } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const articles = await fetchNewsByCategory(category);
        setNews(articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [category]);

  return (
    <main className="bg-gradient-to-r from-slate-600 to-gray-800 min-h-screen text-gray-100">
      <Navbar />
      <h1 className="text-center text-5xl mt-8 ml-8 font-bold capitalize">
      {category} Headlines Today
      </h1>
      {loading ? (
        <p className="text-center mt-8 text-lg text-gray-300">Loading...</p>
      ) : (
        <NewsArticles news={news} />
      )}
    </main>
  );
};

export default NewsPage;






