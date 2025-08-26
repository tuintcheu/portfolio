import React from "react";
import photo from "@/assets/photo.jpg";

const Home = () => {
  return (
    <section
      className="
        min-h-[90vh] flex flex-col justify-center items-center
        bg-[#f5f7fa] dark:bg-[#1a202c] transition-colors duration-500
        px-4
      "
    >
      {/* Message de bienvenue */}
      <span className="text-primary dark:text-primary text-lg md:text-xl font-bold tracking-widest animate-fade-in">
        Bienvenue sur mon portfolio
      </span>

      {/* Avatar dans une ellipse */}
      <div className="my-8 animate-fade-in-slow">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/70 to-blue-300/40 dark:from-primary/80 dark:to-blue-900/40 shadow-lg flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-800 transition-all duration-500">
          <img
            src={photo}
            alt="Ma photo"
            className="w-36 h-36 md:w-52 md:h-52 object-cover rounded-full shadow-inner"
          />
        </div>
      </div>

      {/* Présentation personnelle */}
      <div className="mb-6 animate-fade-in-slower">
        <span className="block text-gray-800 dark:text-gray-100 font-semibold text-xl md:text-2xl text-center">
          Salut, je suis <span className="text-primary">Tuintcheu Pharel</span>
        </span>
        <span className="block text-gray-600 dark:text-gray-300 mt-1 text-center">
          Développeur passionné, créatif et rigoureux, prêt à relever tous les
          défis du web et du mobile.
        </span>
      </div>

      {/* Titre principal */}
      <h1
        className="
          text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-4 animate-fade-in
        "
      >
        Développeur Fullstack Web & Mobile <br />
        <span className="text-primary dark:text-primary">
          passionné par les interfaces intuitives
        </span>
      </h1>

      {/* Paragraphe d’intro */}
      <p
        className="
          text-base md:text-lg text-gray-700 dark:text-gray-200
          mb-8 text-center max-w-2xl animate-fade-in-slow
        "
      >
        J'aime concevoir des systèmes performants du frontend au cloud.
        <br />
        <span className="italic text-primary dark:text-primary">
          “Créer des solutions simples, élégantes, et accessibles.”
        </span>
      </p>
    </section>
  );
};

Home.path = "/";
Home.metadata = {
  title: "Accueil",
  description: "Portfolio - Développeur Fullstack Web & Mobile",
};

export default Home;
