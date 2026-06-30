import React from 'react';
import photo from '../assets/avatar.jpg';

const skills = [
  { name: 'Flutter', level: 90 },
  { name: 'React.js', level: 85 },
  { name: 'TypeScript / JavaScript', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Node.js', level: 75 },
  { name: 'Firebase', level: 80 },
];

const About = () => (
  <section className="min-h-[80vh] bg-[#f5f7fa] dark:bg-[#0b1220] transition-colors duration-500 px-4 py-12">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-10 text-center animate-fade-in">
        À propos de moi
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-12 animate-fade-in-slow">
        <div className="flex-shrink-0">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/70 to-blue-300/40 dark:from-primary/80 dark:to-blue-900/40 shadow-lg flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-800">
            <img
              src={photo}
              alt="Tuintcheu Pharel"
              className="w-36 h-36 md:w-52 md:h-52 object-cover rounded-full"
            />
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Tuintcheu Pharel</h2>
          <p className="text-primary font-semibold mb-4">Développeur Frontend & Mobile</p>
          <p className="text-gray-700 dark:text-gray-200 mb-3 leading-relaxed">
            Diplômé en Génie Logiciel, passionné par la création d'interfaces utilisateurs intuitives, modernes et performantes.
          </p>
          <p className="text-gray-700 dark:text-gray-200 mb-3 leading-relaxed">
            <span className="font-semibold">Parcours :</span> j'ai contribué à <span className="font-semibold">deux applications mises en production</span> (TOLITOLI et 54UP), de l'interface mobile à l'intégration backend.
          </p>
          <p className="text-gray-700 dark:text-gray-200 mb-3 leading-relaxed">
            <span className="font-semibold">Formation :</span> Licence en Génie Logiciel (Université de Yaoundé I), actuellement en Master Professionnel — Conception et Administration des Systèmes Informatiques (Université Siantou).
          </p>
        </div>
      </div>

      {/* Compétences */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 dark:border-gray-700 animate-fade-in-slow">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" aria-hidden="true">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
          Compétences techniques
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1.5">
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{skill.name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision */}
      <div className="mt-8 p-6 rounded-xl bg-primary/5 dark:bg-primary/10 border-l-4 border-primary animate-fade-in-slower">
        <p className="text-gray-800 dark:text-gray-100 italic">
          <span className="font-semibold not-italic">Ma vision :</span> Créer des solutions <span className="text-primary font-semibold">simples</span>, <span className="text-primary font-semibold">élégantes</span> et <span className="text-primary font-semibold">accessibles</span> à tous.
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
