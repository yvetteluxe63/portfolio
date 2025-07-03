import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Code, 
  Palette, 
  Database, 
  Cloud, 
  Smartphone, 
  Search,
  Zap,
  Shield,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and TypeScript.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Best Practices',
        'Cross-browser Compatibility'
      ],
      price: 'Starting at $750'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces that provide exceptional user experiences.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Design Systems',
        'Usability Testing'
      ],
      price: 'Starting at $400'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust server-side solutions with APIs, databases, and cloud infrastructure.',
      features: [
        'RESTful APIs',
        'Database Design',
        'Authentication Systems',
        'Third-party Integrations'
      ],
      price: 'Starting at $1000'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud solutions with deployment, monitoring, and maintenance.',
      features: [
        'AWS/Azure Deployment',
        'CI/CD Pipelines',
        'Performance Monitoring',
        'Backup & Security'
      ],
      price: 'Starting at $1,000'
    },
    
    {
      icon: Search,
      title: 'SEO & Analytics',
      description: 'Search engine optimization and analytics implementation for better visibility.',
      features: [
        'Technical SEO',
        'Google Analytics',
        'Performance Tracking',
        'Conversion Optimization'
      ],
      price: 'Starting at $800'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your requirements, goals, and target audience.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Creating detailed project timeline, architecture, and specifications.',
      icon: Palette,
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your solution with regular updates and feedback loops.',
      icon: Code,
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Comprehensive testing across devices, browsers, and user scenarios.',
      icon: Shield,
    },
    {
      step: '05',
      title: 'Launch',
      description: 'Deploying your solution and providing ongoing support.',
      icon: Zap,
    }
  ];

  const benefits = [
    'Clean, maintainable code',
    'Modern technology stack',
    '100% responsive design',
    'SEO optimized',
    'Fast loading times',
    'Cross-browser compatible',
    'Security best practices',
    'Ongoing support included'
  ];

  return (
    <>
      <Helmet>
        <title>Services - Alex's Web Development Solutions</title>
        <meta name="description" content="Professional web development services including React applications, UI/UX design, backend development, and cloud solutions." />
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
                My <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive web development solutions tailored to your business needs. 
                From concept to deployment, I'll help bring your ideas to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-card group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary">
                        {service.price}
                      </span>
                      <button className="btn-outline text-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">My Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A systematic approach to ensure your project is delivered on time, 
                within budget, and exceeds your expectations.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
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
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
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

        {/* Benefits Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6">Why Choose My Services?</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  I combine technical expertise with creative vision to deliver solutions 
                  that not only work flawlessly but also provide exceptional user experiences.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="glass-card p-8 text-center">
                  <div className="text-6xl mb-6">🚀</div>
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss your project and see how I can help bring your vision to life.
                  </p>
                  <a href="/contact" className="btn-hero">
                    Start Your Project
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;