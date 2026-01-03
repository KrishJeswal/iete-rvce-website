import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleNetwork from '@/components/ParticleNetwork';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import eventImage from '@/assets/event-ctrlaltcompete.png';

const EventsPage = () => {
  const event = {
    title: 'Ctrl + Alt + Compete',
    subtitle: 'The Initiation',
    date: 'June 25, 2024',
    location: 'RV College of Engineering',
    participants: '100+ Participants',
    description: 'We are thrilled to invite you to this amazing hackathon hosted by IETE-RVCE where students from across the college come together, collaborate, and showcase their innovative skills for exciting challenges in a competitive environment. Ctrl+Alt+Compete is the perfect platform to test your coding skills, work with like-minded peers, and push the boundaries of what you can create!',
    fullDescription: [
      'We kicked it off with caffeine and chaos, judged the wild ideas with even wilder criteria, and wrapped it up with results that shocked even our code.',
      'And yes, swipe to meet the sleep-deprived legends who made it all happen—our organising team!',
      'The hackathon featured multiple tracks including Web Development, App Development, and IoT projects. Teams had 24 hours to build innovative solutions to real-world problems.'
    ],
    image: eventImage,
    tags: ['Hackathon', 'Coding', 'Competition', 'Tech'],
    highlights: [
      '24-hour coding marathon',
      'Expert mentorship sessions',
      'Exciting prizes and goodies',
      'Networking opportunities',
      'Industry-relevant problem statements'
    ]
  };

  return (
    <>
      <ParticleNetwork />
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-heading font-semibold border border-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4">
                {event.title}
              </h1>
              <p className="font-heading text-2xl md:text-3xl text-gradient italic mb-8">
                {event.subtitle}
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span>{event.participants}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-2"
                >
                  <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                    About the Event
                  </h2>
                  
                  <div className="space-y-4 font-sans text-muted-foreground text-lg leading-relaxed">
                    <p>{event.description}</p>
                    {event.fullDescription.map((para, index) => (
                      <p key={index}>{para}</p>
                    ))}
                  </div>

                  {/* Event Image Gallery */}
                  <div className="mt-10">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                      Event Gallery
                    </h3>
                    <div className="rounded-2xl overflow-hidden border-2 border-primary/20">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Sidebar */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="sticky top-28 space-y-6">
                    {/* Highlights Card */}
                    <div className="rounded-2xl glass border border-border/50 p-6">
                      <h3 className="font-display text-xl font-bold text-foreground mb-4">
                        Event Highlights
                      </h3>
                      <ul className="space-y-3">
                        {event.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-3 text-muted-foreground"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Card */}
                    <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 p-6">
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">
                        Want to participate?
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Join IETE-RVCE to get access to all upcoming events and workshops.
                      </p>
                      <Link
                        to="/join"
                        className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl font-heading font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30"
                      >
                        Join Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default EventsPage;
