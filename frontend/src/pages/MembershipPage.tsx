import ParticleNetwork from '@/components/ParticleNetwork';
import Navbar from '@/components/Navbar';
import Membership from '@/components/Membership';
import Footer from '@/components/Footer';

const MembershipPage = () => {
  return (
    <>
      <ParticleNetwork />
      <Navbar />
      <main className="pt-24">
        <Membership />
        <Footer />
      </main>
    </>
  );
};

export default MembershipPage;
