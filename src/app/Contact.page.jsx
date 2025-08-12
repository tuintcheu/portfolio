import React, { useState } from 'react';

const Contact = () => {
  // Pour la démo, on ne fait qu’un faux envoi
  const [sent, setSent] = useState(false);

  return (
    <section className="min-h-[80vh] bg-[#f5f7fa] dark:bg-[#1a202c] transition-colors duration-500 px-4 py-12 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-primary mb-6 animate-fade-in">
        Contact
      </h1>
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-fade-in-slow">
        {sent ? (
          <div className="text-center text-green-600 dark:text-green-400 font-bold">
            Merci pour votre message ! Je vous répondrai rapidement.
          </div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={e => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input
              type="text"
              placeholder="Votre nom"
              required
              className="p-3 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <input
              type="email"
              placeholder="Votre email"
              required
              className="p-3 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <textarea
              placeholder="Votre message"
              required
              rows={4}
              className="p-3 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <button
              type="submit" disabled={!sent}
              className="bg-primary text-white font-bold py-3 rounded hover:bg-blue-700 transition"
            >
              Envoyer
            </button>
          </form>
        )}
        {/* Liens directs */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <a href="mailto:leoncepharel60@gmail.com" className="text-primary hover:underline">email</a>
          <a href="https://www.linkedin.com/in/pharel
tuintcheu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>
          <a href="https://wa.me/676816991" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp</a>
        </div>
      </div>
    </section>
  );
};

Contact.path = '/contact';
Contact.metadata = {
  title: 'Contact',
  description: 'Formulaire et liens pour me contacter',
};

export default Contact;
