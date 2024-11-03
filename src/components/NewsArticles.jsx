import moment from "moment";

const NewsArticles = ({ news }) => {
  const formatDate = (date) => moment(date).format("ddd, DD MMM YYYY HH:mm:ss");

  return (
    <div className="container mx-auto grid gap-8 mt-8 p-2 grid-cols-1">
      {news.map((article, index) => (
        <div
          key={index}
          className="bg-gray-900 flex flex-col lg:flex-row text-gray-200 p-12 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
        >
          <img
            src={article.image}
            alt={article.title}
            className="lg:w-[40%] h-48 lg:h-72 object-cover rounded-lg mb-4 lg:mb-0"
          />
          <div className="lg:ml-6 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-blue-400 mb-2 hover:text-blue-500">
              {article.title}
            </h2>
            <p className="text-gray-300 mb-3">{article.description}</p>
            <p className="text-sm text-gray-400 mb-4">
              Channel: {article.source.name} | Published at: {formatDate(article.publishedAt)}
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
  );
};

export default NewsArticles;
