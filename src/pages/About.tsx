import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, MapPin, Coffee, Code2, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'PHP', level: 90 },
    { name: 'MySQL', level: 85 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'React', level: 85 },
    { name: 'Angular', level: 80 },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      description: 'Leading frontend development team, implementing modern React applications with TypeScript and advanced state management.',
      icon: Rocket,
    },
    {
      year: '2025',
      title: 'Full Stack Developer',
      company: 'Duapa Werkspace',
      description: 'Developed scalable web applications using React, Supabase, and PHP, JavaScript. JQuery, and MySQL.',
      icon: Code2,
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'WebAgency Pro',
      description: 'Created responsive websites and web applications for various clients. Specialized in React and modern CSS frameworks.',
      icon: Lightbulb,
    },
    {
      year: '2019',
      title: 'Software Engineering Internship',
      company: 'IPMC University College',
      description: 'HND in Software Engineering with focus on web technologies and software engineering principles.',
      icon: Coffee,
    },
  ];

  const interests = [
    '🎮 Gaming',
    '📚 Reading Tech Blogs',
    '🎵 Music Production',
    '📷 Photography',
    '🌍 Traveling',
    '☕ Coffee Enthusiast',
  ];

  return (
    <>
      <Helmet>
        <title>About Alex - Web Developer & Tech Enthusiast</title>
        <meta name="description" content="Learn about Alex's journey as a web developer, skills, experience, and passion for creating modern web applications." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Passionate web developer with 4+ years of experience crafting digital experiences 
                that matter. I love turning complex problems into simple, beautiful solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative"
              >
                <div className="relative w-full max-w-md mx-auto">
                   <div className="w-full h-full bg-gradient-primary flex items-center justify-center text-6xl">
  <img
    src="image.png"
    alt="Profile"
    className="w-[24rem] h-[24rem] rounded-full object-cover"
  />
</div>

                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-bounce">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
              </motion.div>

              {/* About Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-6"
              >
                <div className="glass-card">
                  <h2 className="text-2xl font-bold mb-4">My Story</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    My journey into web development started during university when I built my first website. 
                    The thrill of seeing code come to life in the browser was addictive, and I've been 
                    passionate about creating digital experiences ever since.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, I specialize in modern web technologies, focusing on React, TypeScript, and 
                    Supabase, PHP, and MySQL, as well as Angular and HTML, CSS, JS. I believe in writing clean, maintainable code and creating applications 
                    that users love to interact with.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="glass-card">
                    <div className="flex items-center space-x-3 mb-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Location</span>
                    </div>
                    <p className="text-muted-foreground">Takoardi, Ghana</p>
                  </div>
                  <div className="glass-card">
                    <div className="flex items-center space-x-3 mb-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Experience</span>
                    </div>
                    <p className="text-muted-foreground">4+ Years</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Skills & Expertise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here are the technologies and tools I work with to bring ideas to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-card"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                      className="h-2 rounded-full gradient-primary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">My Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A timeline of my professional experience and educational background.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <div className={`glass-card ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <item.icon className="w-6 h-6 text-primary" />
                        <span className="text-primary font-semibold">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-primary mb-3">{item.company}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Beyond Code</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                When I'm not coding, you can find me exploring these interests and hobbies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto"
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <span className="text-sm font-medium">{interest}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;