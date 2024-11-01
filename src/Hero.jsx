import ReactIcon from "./assets/react.svg";

const Hero = () => {
  return (
    <main className="bg-gradient-to-r from-slate-500 to-gray-950 min-h-screen flex flex-col items-center justify-center text-center text-white p-6">
        
      <div className="flex flex-roew items-center space-x-4">
        <div className="relative flex items-center justify-center">
          <img
            src={ReactIcon}
            className="h-40 w-40 text-blue-200 animate-spin-slow"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-[1.4rem]">🌐</p>
          </div>
        </div>

        <h1 className="text-[5.5rem] font-bold leading-tight">
          Reactify News <span className="text-3xl gradient-text">🇮🇳</span>
        </h1>
      </div>

      <div className="mt-8 max-w-[50rem] mx-auto py-6 px-10 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg">
        <p className="text-[1.2rem] font-light leading-relaxed">
          Welcome to Reactify News – your gateway to the world's stories as they
          happen, in real time! With a strong commitment to delivering accurate,
          real-time, and reliable updates, Reactify News keeps you informed,
          empowered, and engaged, every moment, wherever you are, bringing you
          unparalleled coverage and insights that truly matter.
        </p>
        <a
          href="#"
          className="button button--telesto mt-8 inline-block px-40 py-3 bg-[#00d8ff] text-white hover:text-black rounded-md"
        >
          <span className="font-semibold text-base">Explore News</span>
        </a>
      </div>
    </main>
  );
};

export default Hero;
