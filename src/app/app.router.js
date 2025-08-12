import { RouterComponent, defineRouter } from 'rasengan';
import Home from '@/app/home.page';
import About from '@/app/about.page';
import AppLayout from '@/app/app.layout';
import Contact from '@/app/Contact.page';
import Competences from '@/app/competences.page';
import Projets from '@/app/Projets.page';
import CV from '@/app/CV.page';

class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [],
  layout: AppLayout,
  pages: [Home,About,Contact,Competences,Projets,CV],
})(AppRouter);
