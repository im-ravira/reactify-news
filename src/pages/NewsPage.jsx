import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import moment from "moment";

const API_DOMAIN = "https://cors-anywhere.herokuapp.com/https://gnews.io/api/v4/top-headlines?";
const API_KEY = import.meta.env.VITE_API_KEY;

const NewsPage = () => {
  const { category } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${API_DOMAIN}country=in&lang=en&category=${category}&apikey=${API_KEY}`
        );
        setNews(response.data.articles);
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
        <div className="container mx-auto grid gap-8 mt-8 p-2 grid-cols-1">
          {news.map((article, index) => (
            <div
              key={index}
              className="bg-gray-900 flex flex-col lg:flex-row text-gray-200 p-12 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              <img
                src={article.image}
                alt={article.title}
                className="lg:w-[45%] h-48 lg:h-auto object-cover rounded-lg mb-4 lg:mb-0"
              />
              <div className="lg:ml-6 flex flex-col justify-between">
                <h2 className="text-2xl font-bold text-blue-400 mb-2 hover:text-blue-500">
                  {article.title}
                </h2>
                <p className="text-gray-300 mb-3">{article.description}</p>
                <p className="text-sm text-gray-400 mb-4">
                  Channel: {newsChannel(article.source.name)} | Published at:{" "}
                  {lastUpdate(article.publishedAt)}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-500 font-semibold hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export const summary = "Channel and PublishedAt";
export const newsChannel = (channel) => `${channel}`;
export const lastUpdate = (published) =>
  `${moment(published).format("ddd, DD MMM YYYY HH:mm:ss")}`;

export default NewsPage;






