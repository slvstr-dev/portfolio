import { meta } from './common/meta';
import { about } from './components/blocks/about';
import { contact } from './components/blocks/contact';
import { experience } from './components/blocks/experience';
import { projects } from './components/blocks/projects';
import { contactModal } from './components/dialogs/contactModal';
import { menuSidebar } from './components/dialogs/menuSidebar';
import { contactForm } from './components/forms/contactForm';
import { footer } from './components/layout/footer';
import { header } from './components/layout/header';
import { avatar } from './components/ui/avatar';
import { carousel } from './components/ui/carousel';
import { copyright } from './components/ui/copyright';
import { error } from './components/ui/error';
import { logo } from './components/ui/logo';
import { navigationMenu } from './components/ui/navigationMenu';
import { home } from './pages/home';
import { notFound } from './pages/notFound';

const translations = {
  common: {
    meta,
  },
  components: {
    blocks: {
      about,
      contact,
      experience,
      projects,
    },
    dialogs: {
      contact_modal: contactModal,
      menu_sidebar: menuSidebar,
    },
    forms: {
      contact_form: contactForm,
    },
    layout: {
      footer,
      header,
    },
    ui: {
      avatar,
      carousel,
      copyright,
      error,
      logo,
      navigation_menu: navigationMenu,
    },
  },
  pages: {
    error,
    home,
    not_found: notFound,
  },
};

export default translations;
