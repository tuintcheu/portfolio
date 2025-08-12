import { Link } from 'rasengan';

const Navbar = () => (
  <nav className="w-full flex justify-center gap-4 p-4 bg-#010314">
    <Link to="/" className="text-blue-600 font-bold">Accueil</Link>
   
  
    <Link to="/projets" className="text-blue-600 font-bold">Projets</Link>
    
    <Link to="/contact" className="text-blue-600 font-bold">Contact</Link>
    <Link to="/about" className="text-blue-600 font-bold">À propos</Link>
  </nav>
);


export default Navbar;
