import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl font-bold mb-8">
            History of IETE-RVCE
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The Institution of Electronics and Telecommunication Engineers
              (IETE) is India’s leading professional society devoted to the
              advancement of Science and Technology in Electronics,
              Telecommunication, Computers, Information Technology, and related
              disciplines.
            </p>

            <p>
              IETE has been actively involved in promoting technical education,
              research, and professional excellence across the country through
              its chapters and student forums.
            </p>

            <p>
              The IETE Student Forum at RV College of Engineering (RVCE) aims to
              nurture technical curiosity, encourage innovation, and bridge the
              gap between academic learning and industry exposure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
