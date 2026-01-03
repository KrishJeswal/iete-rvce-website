import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Phone, GraduationCap, Building, Calendar, Send, CheckCircle } from 'lucide-react';
import ParticleNetwork from '@/components/ParticleNetwork';
import Navbar from '@/components/Navbar';

const Join = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    usn: '',
    department: '',
    year: '',
    membershipType: 'fg',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <ParticleNetwork />
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-md"
          >
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-glow">
              <CheckCircle className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Application Submitted!
            </h1>
            <p className="font-sans text-muted-foreground mb-8">
              Thank you for your interest in IETE-RVCE. We'll review your application and get back to you soon.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-heading font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <ParticleNetwork />
      <Navbar />
      <main className="min-h-screen pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Join <span className="text-gradient">IETE-RVCE</span>
            </h1>
            <p className="font-sans text-lg text-muted-foreground max-w-xl mx-auto">
              Become a part of our student-driven technical community and unlock endless opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl glass border border-border/50 p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Personal Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-heading text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-heading text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="you@rvce.edu.in"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-heading text-sm font-medium text-foreground">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-heading text-sm font-medium text-foreground">
                      USN *
                    </label>
                    <input
                      type="text"
                      name="usn"
                      value={formData.usn}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="1RVXXYYXXX"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Academic Information
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="font-heading text-sm font-medium text-foreground">
                      Department *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted border border-border/50 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select Department</option>
                        <option value="ece">ECE</option>
                        <option value="ete">ETE</option>
                        <option value="eee">EEE</option>
                        <option value="cse">CSE</option>
                        <option value="ise">ISE</option>
                        <option value="me">ME</option>
                        <option value="cv">CV</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-heading text-sm font-medium text-foreground">
                      Year *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted border border-border/50 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-heading text-sm font-medium text-foreground">
                      Membership Type *
                    </label>
                    <select
                      name="membershipType"
                      value={formData.membershipType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                    >
                      <option value="fg">Forum Graduate (FG)</option>
                      <option value="fd">Forum Diploma (FD)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-heading font-semibold text-lg bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
                >
                  Submit Application
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            By submitting this form, you agree to our terms and conditions. <br />
            For any queries, contact us at{' '}
            <a href="mailto:iete@rvce.edu.in" className="text-primary hover:underline">
              iete@rvce.edu.in
            </a>
          </motion.p>
        </div>
      </main>
    </>
  );
};

export default Join;
