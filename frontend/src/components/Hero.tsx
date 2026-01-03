import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-heading text-primary">Student Technical Community</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-gradient-cyan">Empowering Engineering</span>
          <br />
          <span className="text-foreground">Excellence at RVCE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          IETE-RVCE is a student-driven technical community fostering innovation, research, and
          professional development in electronics and telecommunication engineering across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/join"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-lg bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105 animate-pulse-glow"
          >
            Join Our Chapter
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-lg border-2 border-primary/50 text-foreground transition-all hover:border-primary hover:bg-primary/10"
          >
            Explore Events
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
