import ReactIcon from "../assets/react.svg";
import GlobeIcon from "../assets/globe.svg";
import { Link } from "react-router-dom";

const HeroPage = () => {
  return (
    <main className="bg-gradient-to-r from-slate-500 to-gray-950 min-h-screen flex flex-col items-center justify-center text-center text-white p-6">
      <div className="flex flex-row items-center space-x-4">
        <div className="relative flex items-center justify-center">
          <img
            src={ReactIcon}
            className="h-40 w-40 text-blue-200 animate-spin-slow"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={GlobeIcon} className="w-8 h-8" />
          </div>
        </div>

        <h1 className="text-[5.5rem] font-bold leading-tight">
          Reactify News<span className="text-4xl gradient-text ml-2">🇮🇳</span>
        </h1>
      </div>

      <div className="mt-8 max-w-[48rem] mx-auto py-6 px-8 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg">
        <p className="text-[1.2rem] font-thin leading-relaxed">
        Welcome to Reactify News – your real-time gateway to global stories! Stay informed and empowered with accurate, reliable, and timely updates as events unfold. Reactify News brings you essential coverage and valuable insights that truly matter, wherever you are. Join us today and never miss a moment in the world’s unfolding stories!
        </p>
        <Link
          to="/news/general"
          className="button button--telesto mt-8 inline-block px-48 py-3 bg-[#00d8ff] text-white hover:text-black rounded-md"
        >
          <span className="font-semibold text-base">Explore News</span>
        </Link>
      </div>
    </main>
  );
};

export default HeroPage;
