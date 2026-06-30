import { Link, useLocation } from "rasengan";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/projets", label: "Projets" },
  { to: "/about", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  let pathname = "/";
  try {
    const location = useLocation();
    pathname = location?.pathname || "/";
  } catch {
    // useLocation may not be available in some render contexts (SSR fallback)
  }

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-lg text-gray-900 dark:text-white">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white">
            TP
          </span>
          <span className="hidden sm:inline">Tuintcheu Pharel</span>
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                    active
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
