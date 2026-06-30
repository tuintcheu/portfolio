import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ouvre le client mail avec le contenu pré-rempli
    const subject = encodeURIComponent(`Contact portfolio — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:leoncepharel60@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="min-h-[80vh] bg-[#f5f7fa] dark:bg-[#0b1220] transition-colors duration-500 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-3 text-center animate-fade-in">
          Travaillons ensemble
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 animate-fade-in-slow">
          Une question, un projet, une opportunité&nbsp;? Je suis à l'écoute.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Formulaire */}
          <div className="md:col-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 dark:border-gray-700 animate-fade-in-slow">
            {sent ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/40 mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-green-600 dark:text-green-400 font-bold text-lg">
                  Merci pour votre message&nbsp;!
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  Votre client mail s'est ouvert pour finaliser l'envoi.
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Votre nom</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    required
                    className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Votre email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jean@exemple.com"
                    required
                    className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Votre message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Parlez-moi de votre projet…"
                    required
                    rows={5}
                    className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                  />
                </label>
                <button
                  type="submit"
                  className="bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-md shadow-primary/20 hover:shadow-primary/40 inline-flex items-center justify-center gap-2"
                >
                  Envoyer le message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Liens directs */}
          <div className="md:col-span-2 flex flex-col gap-3 animate-fade-in-slower">
            <a
              href="mailto:leoncepharel60@gmail.com"
              className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition group"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-500 dark:text-gray-400">Email</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                  leoncepharel60@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/pharel-tuintcheu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition group"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.97 0 1.78-.78 1.78-1.75V1.74C24 .78 23.19 0 22.22 0z"/>
                </svg>
              </span>
              <div className="flex-1">
                <div className="text-xs text-gray-500 dark:text-gray-400">LinkedIn</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  pharel-tuintcheu
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/237676816991"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition group"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.001.002-.999 3.648 3.977-1.609z"/>
                </svg>
              </span>
              <div className="flex-1">
                <div className="text-xs text-gray-500 dark:text-gray-400">WhatsApp</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  +237 676 816 991
                </div>
              </div>
            </a>
          </div>
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
