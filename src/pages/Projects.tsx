import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['All', 'React', 'Full Stack'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce platform with React, TypeScript, and Paystack integration. Features include user authentication, product catalog, shopping cart, and payment processing.',
      longDescription: 'A comprehensive e-commerce solution built with modern web technologies. The platform includes a React frontend with TypeScript for type safety, a Supabase backend for data storage. Key features include user authentication with JWT, product management, shopping cart functionality, order processing, and Stripe payment integration. The application is fully responsive and optimized for performance.',
      category: 'React',
      tech: ['React', 'TypeScript', 'Supabase', 'Paystack'],
      image: 'yvette1.png',
      github: 'https://github.com',
      live: 'https://yvetteluxe.vercel.app/',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      longDescription: 'A powerful task management application designed for teams and individuals. Built with HTML, CSS, and JavaScript, task organization, project timelines, and comprehensive reporting. The backend uses JavaScript localhost for reliable data management.',
      category: 'Full Stack',
      tech: ['CSS', 'HTML', 'Bootstrap', 'JavaScript'],
      image: '/todo1.png',
      github: 'https://github.com',
      live: 'https://to-do-list-stack.github.io/app/',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Agro Market Place',
      description: 'A platform where farmers can use to sell their produce, right from farm to customers, and an admin dashboad to monitor the activities of the farmers and customers who use the platform.',
      longDescription: 'A platform where farmers can use to sell their produce, right from farm to customers, and an admin dashboad to monitor the activities of the farmers and customers who use the platform.',
      category: 'React',
      tech: ['React', 'TypeScript', 'Supabase'],
      image: '/agro1.png',
      github: 'https://github.com',
      live: 'https://agrohavenmarketplace.vercel.app/',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Farm Shift Management App',
      description: 'A simple application where farmers use to manage workers on their farm, assign tasks, and track progress.',
      longDescription: 'A simple application where farmers use to manage workers on their farm, assign tasks, and track progress.',
      category: 'React',
      tech: ['React', 'TypeScript', 'Supabase'],
      image: '/agro2.png',
      github: 'https://github.com',
      live: 'https://farmshift.vercel.app/',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Non Governmental Organization (NGO) App',
      description: 'NGO Connect is a modern web and mobile application designed to help non-profit organizations manage projects, track donations, connect with volunteers, and share impact stories. The platform simplifies communication, increases transparency, and empowers NGOs to reach more people, raise funds, and create lasting change in their communities.',
      longDescription: 'NGO Connect is a modern web and mobile application designed to help non-profit organizations manage projects, track donations, connect with volunteers, and share impact stories. The platform simplifies communication, increases transparency, and empowers NGOs to reach more people, raise funds, and create lasting change in their communities.',
      category: 'React',
      tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      image: '/ngo.png',
      github: 'https://github.com',
      live: 'https://hope-in-action-site.vercel.app/',
      status: 'In Progress'
    },
    {
      id: 6,
      title: 'Fashion Brand Website',
      description: 'Full-featured content management system with markdown support, SEO optimization, and multi-author capabilities.',
      longDescription: 'A modern fashion brand built with React, Typescript, Supabase, tailWind CSS. The website features a sleek design, responsive layout.',
      category: 'Full Stack',
      tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      image: '/vint.png',
      github: 'https://github.com',
      live: 'https://vintoura.vercel.app/',
      status: 'In Progress'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Helmet>
        <title>Projects - Alex's Portfolio | Web Development Work</title>
        <meta name="description" content="Explore Alex's web development projects including React applications, full-stack solutions, and API services." />
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
                My <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A showcase of my recent work, featuring modern web applications, 
                APIs, and innovative solutions that solve real-world problems.
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                <Filter className="w-4 h-4" />
                <span>Filter by category:</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground shadow-glow'
                        : 'bg-secondary hover:bg-accent text-secondary-foreground'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="glass-card group cursor-pointer"
                    onClick={() => openModal(project)}
                  >
                    {/* Project Image */}
                    <div className="relative mb-6 overflow-hidden rounded-xl">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          project.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-lg">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex space-x-4 pt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover rounded-xl mb-6"
                />

                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  <div>
                    <h3 className="font-semibold mb-3">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-hero flex items-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Projects;