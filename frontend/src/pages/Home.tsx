import './Home.css';

import { HeroSection } from '../sections/HeroSection';
import { ProfilesSection } from '../sections/ProfilesSection';
import { ServicesSection } from '../sections/ServicesSection';
import { StructureSection } from '../sections/StructureSection';
import { UnitsSection } from '../sections/UnitsSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ProfilesSection />
      <ServicesSection />
      <StructureSection />
      <UnitsSection />
    </main>
  );
};

export default Home;
