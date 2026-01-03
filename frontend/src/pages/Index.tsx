import ParticleNetwork from '@/components/ParticleNetwork';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import Team from '@/components/Team';
import Membership from '@/components/Membership';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <ParticleNetwork />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Team />
        <Membership />
        <Footer />
      </main>
    </>
  );
};

export default Index;
