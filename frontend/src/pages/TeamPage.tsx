import ParticleNetwork from '@/components/ParticleNetwork';
import Navbar from '@/components/Navbar';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

const TeamPage = () => {
  return (
    <>
      <ParticleNetwork />
      <Navbar />
      <main className="pt-24">
        <Team />
        <Footer />
      </main>
    </>
  );
};

export default TeamPage;
