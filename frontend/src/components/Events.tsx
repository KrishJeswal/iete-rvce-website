import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import eventImage from '@/assets/event-final.png';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      title: 'Ctrl + Alt + Compete',
      subtitle: 'The Initiation',
      date: 'June 25, 2024',
      location: 'RV College of Engineering',
      participants: '100+ Participants',
      description: 'We kicked it off with caffeine and chaos, judged the wild ideas with even wilder criteria, and wrapped it up with results that shocked even our code. A hackathon experience like no other!',
      image: eventImage,
      tags: ['Hackathon', 'Coding', 'Competition']
    }
  ];

  return (
    <section id="events" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-1/3 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border border-accent/30 text-accent font-heading text-sm mb-6">
            Our Events
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient">Events</span>
          </h2>
          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the thrill of technical competitions and collaborative learning
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col h-full rounded-2xl glass border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {event.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-[10px] font-heading font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-grow p-6">
                <div className="mb-4">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1 line-clamp-1">
                    {event.title}
                  </h3>
                  <p className="font-heading text-sm text-primary italic">
                    {event.subtitle}
                  </p>
                </div>

                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {event.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>

                <Link
                  to="/events"
                  className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-heading text-sm font-semibold bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
