import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { CTASection } from '../sections/CTASection';
import { PartnersSection } from '../sections/PartnersSection';
import './MainLayout.css';

const MainLayout = () => {
  const { pathname } = useLocation();
  const shouldShowGlobalSections = pathname !== '/contato';

  return (
    <div className="main-layout">
      <Header />
      <main className="main-layout__content">
        <Outlet />
      </main>
      {shouldShowGlobalSections ? <CTASection /> : null}
      {shouldShowGlobalSections ? <PartnersSection compact /> : null}
      <Footer />
    </div>
  );
};

export default MainLayout;
