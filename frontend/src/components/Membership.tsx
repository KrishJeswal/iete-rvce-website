import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const Membership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const feeStructure = [
    { year: 'First Year', fg: '₹1063', fd: '₹813' },
    { year: 'Second Year', fg: '₹813', fd: '₹625' },
    { year: 'Third Year', fg: '₹625', fd: '₹438' },
    { year: 'Fourth Year', fg: '₹438', fd: 'Nil' },
  ];

  const benefits = [
    'One time Payment (4 Years)',
    'Valid for 4 Years (B.E./B.Tech)',
    'Access to all IETE Student Forum activities',
    'Regular technical updates & workshops',
    'Networking with industry professionals',
  ];

  return (
    <section id="membership" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Formation of <span className="text-gradient">ISFs</span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-3xl mx-auto">
            ISFs can be formed through local IETE Centres at recognized Engineering colleges and 
            Polytechnics. There should be a minimum of 35 students to open an ISF. Membership of 
            Forum Graduate (FG) for 4 year Engineering courses and Forum Diploma (FD) for three 
            year Diploma courses.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Fee Structure Table */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl glass border border-border/50 overflow-hidden"
          >
            <div className="p-6 border-b border-border/50">
              <h3 className="font-display text-xl font-bold text-foreground">
                Membership Fee Structure
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                (Fees may change as per Governing Council decision w.e.f 1st July 2025)
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">Year</th>
                    <th className="px-6 py-4 text-center font-heading font-semibold text-foreground">Forum Graduate (FG)</th>
                    <th className="px-6 py-4 text-center font-heading font-semibold text-foreground">Forum Diploma (FD)</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((row, index) => (
                    <tr key={row.year} className={index % 2 === 0 ? 'bg-card' : 'bg-muted/30'}>
                      <td className="px-6 py-4 font-heading text-foreground">{row.year}</td>
                      <td className="px-6 py-4 text-center font-sans text-primary font-semibold">{row.fg}</td>
                      <td className="px-6 py-4 text-center font-sans text-secondary font-semibold">{row.fd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Benefits Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl glass border border-border/50 p-8"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Membership Benefits
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-sans text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              to="/join"
              className="inline-flex items-center justify-center w-full mt-8 px-8 py-4 rounded-xl font-heading font-semibold text-lg bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
            >
              Join Now
            </Link>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              * Note: Fees are subject to change as per IETE HQ regulations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
