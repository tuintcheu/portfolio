import React from 'react';
import photo from '@/assets/photo.jpg'; // Mets ici ta photo pro si tu veux

const About = () => (
  <section className="min-h-[80vh] bg-[#f5f7fa] dark:bg-[#1a202c] transition-colors duration-500 px-4 py-12 flex flex-col items-center">
    <h1 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-primary mb-6 animate-fade-in">
      À propos de moi
    </h1>
    <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full animate-fade-in-slow">
      {/* Photo pro */}
      <div className="flex-shrink-0">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/70 to-blue-300/40 dark:from-primary/80 dark:to-blue-900/40 shadow-lg flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-800 transition-all duration-500">
          <img
            src={photo}
            alt="Ma photo"
            className="w-36 h-36 md:w-52 md:h-52 object-cover rounded-full shadow-inner"
          />
        </div>
      </div>
      {/* Texte de présentation */}
      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Tuintcheu Pharel</h2>
        <p className="text-gray-700 dark:text-gray-200 mb-2">
          <span className="font-semibold">Développeur Fullstack Web & Mobile</span> passionné par la création d’expériences utilisateurs intuitives et performantes.
        </p>
        <p className="text-gray-700 dark:text-gray-200 mb-2">
          <span className="font-semibold">Parcours :</span> Diplômé en informatique, actuellement développeur indépendant. J’ai travaillé sur des projets variés allant du web au mobile, en passant par l’API et le cloud.
        </p>
        <p className="text-gray-700 dark:text-gray-200 mb-2">
          <span className="font-semibold">Vision :</span> Créer des solutions <span className="text-primary">simples</span>, <span className="text-primary">élégantes</span> et <span className="text-primary">accessibles</span> à tous.
        </p>
      </div>
    </div>
  </section>
);

About.path = '/about';
About.metadata = {
  title: 'À propos',
  description: 'Présentation, parcours et vision',
};

export default About;