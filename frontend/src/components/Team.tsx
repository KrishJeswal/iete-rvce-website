import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';

import teamVineet from '@/assets/team-vineet-new.png';
import teamBrahati from '@/assets/team-brahati-new.png';
import teamAkshatha from '@/assets/team-akshatha-new.png';
import teamVijay from '@/assets/team-vijay-new.png';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Vineet Raj',
    role: 'CHAIR',
    image: teamVineet,
    linkedin: 'https://in.linkedin.com/in/vineet-raj-589b11298',
    email: 'vineetraj.ai23@rvce.edu.in',
  },
  {
    name: 'Brahati Jorapur',
    role: 'SECRETARY',
    image: teamBrahati,
    linkedin: 'https://in.linkedin.com/in/brahati-jorapur-b20075283',
    email: 'brahatijorapur.is23@rvce.edu.in',
  },
  {
    name: 'Akshatha N',
    role: 'TREASURER',
    image: teamAkshatha,
    linkedin: 'https://www.linkedin.com/in/akshatha-n-872107353/',
    email: 'akshathan.cs23@rvce.edu.in',
  },
  {
    name: 'Vijay Sudarshan B',
    role: 'HEAD OF PRODUCTION DESIGN',
    image: teamVijay,
    linkedin: 'https://in.linkedin.com/in/vjsud',
    email: 'vijaysudarshanb.et23@rvce.edu.in',
  },
];


const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="relative p-6 rounded-2xl glass border border-border/50 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
        {/* Glowing border on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-xl -z-10" />

        {/* Profile Image with gradient border */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-[3px] animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-card overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="text-center">
          <h3 className="font-display text-xl font-bold text-foreground mb-2">
            {member.name}
          </h3>
          <p className="font-heading text-sm font-semibold text-primary tracking-wider">
            {member.role}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            aria-label={`${member.name} LinkedIn`}
          >
            <Linkedin size={18} />
          </a>
          )}
          {member.email && (
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(member.email)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label={`Email ${member.name}`}
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Executive Committee
          </h2>
          <p className="font-heading text-xl text-muted-foreground">
            Leading the Charge
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
