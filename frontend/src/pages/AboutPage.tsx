import ParticleNetwork from '@/components/ParticleNetwork';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <>
      <ParticleNetwork />
      <Navbar />
      <main className="pt-24">
        <About />
        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
