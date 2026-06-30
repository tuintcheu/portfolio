import React from "react";
import { Link } from "rasengan";
import photo from "../assets/avatar.jpg";

const Home = () => {
  return (
    <section
      className="
        min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center
        bg-[#f5f7fa] dark:bg-[#0b1220] transition-colors duration-500
        px-4 py-12 relative overflow-hidden
      "
    >
      {/* Décor d'arrière-plan */}
      <div className="absolute inset-0 -z-0 opacity-60 dark:opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/30 dark:bg-blue-700/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <span className="text-primary text-sm md:text-base font-bold tracking-[0.3em] uppercase animate-fade-in">
          Bienvenue sur mon portfolio
        </span>

        <div className="my-8 animate-fade-in-slow">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-primary/70 to-blue-300/40 dark:from-primary/80 dark:to-blue-900/40 shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-800">
            <img
              src={photo}
              alt="Tuintcheu Pharel"
              className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-full"
            />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-4 animate-fade-in max-w-3xl leading-tight">
          Salut, je suis <span className="text-primary">Tuintcheu Pharel</span>
          <br />
          <span className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-200">
            Développeur Fullstack Web & Mobile
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 text-center max-w-2xl animate-fade-in-slow">
          Je conçois des systèmes performants du frontend au cloud.
          <br />
          <span className="italic text-primary">
            « Créer des solutions simples, élégantes, et accessibles. »
          </span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-slower">
          <Link
            to="/projets"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-blue-700 text-white font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
          >
            Voir mes projets
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold transition-all"
          >
            Me contacter
          </Link>
        </div>

        {/* Stats rapides */}
        <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 animate-fade-in-slower">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-primary">2</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1">
              Apps en production
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-primary">3+</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1">
              Années d'expérience
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-primary">10+</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1">
              Projets réalisés
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Home.path = "/";
Home.metadata = {
  title: "Accueil",
  description: "Portfolio - Développeur Fullstack Web & Mobile",
};

export default Home;
