import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Zap, Users } from 'lucide-react';

const Home = () => {
  const techStack = [
    { name: 'PHP', icon: '🐘' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Angular', icon: '🅰️' },
  ];

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized applications with lightning-fast load times and smooth user experiences.'
    },
    {
      icon: Users,
      title: 'User-Centered',
      description: 'Designs and functionality focused on real user needs and intuitive interactions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Alex - Web Developer | Modern Web Applications</title>
        <meta name="description" content="Professional web developer specializing in React, TypeScript, and modern web technologies. Creating stunning, responsive applications." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">{/* Added pt-24 for navbar spacing */}
        {/* Background Elements */}
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
              {/* Profile Image - Replace src with your photo */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-glow bg-gradient-primary flex items-center justify-center text-6xl md:text-7xl">
                {<img src="/image.png" alt="Alex" className="w-full h-full object-cover" />}
                
              </div>
              
              {/* Floating elements around profile */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-bounce">
                <span className="text-sm">⚡</span>
              </div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary-glow rounded-full animate-pulse"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Hi, I'm <span className="gradient-text">Alex</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Web Developer)',
                  2000,
                  'PHP & MySQL Developer',
                  2000,
                  'Angular Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Content Creator',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              I craft beautiful, responsive web applications that provide exceptional user experiences. 
              Let's build something amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link to="/projects" className="btn-hero group">
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Hire Me
              </Link>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              <span className="text-sm text-muted-foreground mb-2 sm:mb-0">Tech Stack:</span>
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Me?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I bring a unique combination of technical expertise, creative vision, and dedication to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center glass-card max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and bring them to life with modern web technologies and best practices.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-hero">
                Get In Touch
              </Link>
              <Link to="/projects" className="btn-outline">
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;