import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NewsArticles from "../components/NewsArticles";
import { fetchNewsByCategory, fetchNewsBySearch } from "../api/api";
import Navbar from "../components/Navbar";

const NewsPage = () => {
  const { category } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const articles = await fetchNewsByCategory(category);
        setNews(articles);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Unable to fetch news articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [category]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const articles = await fetchNewsBySearch(searchQuery);
      setNews(articles);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("Unable to fetch search results. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gradient-to-r from-slate-600 to-gray-800 min-h-screen text-gray-100">
      <Navbar />
      <div className="flex flex-row items-center justify-between mx-8">
      <h1 className="text-center text-5xl mt-8 font-bold capitalize">
        {category} Headlines Today
      </h1>

      {/* Search Box */}
      <div className="flex justify-center mt-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search news..."
          className="w-full max-w-md px-4 py-2 rounded-l-md bg-gray-700 text-gray-100 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center mt-12">
          <div className=" border-t-4 border-blue-300 rounded-full w-16 h-16 animate-spin"></div>
          <p className="ml-4 text-lg text-gray-300">Loading...</p>
        </div>
      ) : error ? (
        <p className="text-center mt-8 text-lg text-red-400">{error}</p>
      ) : news.length > 0 ? (
        <NewsArticles news={news} />
      ) : (
        <p className="text-center mt-8 text-lg text-gray-300">
          No articles available for {searchQuery ? `"${searchQuery}"` : category}.
        </p>
      )}
    </main>
  );
};

export default NewsPage;
