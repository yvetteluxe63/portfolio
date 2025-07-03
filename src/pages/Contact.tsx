import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  MessageSquare,
  Coffee,
  Calendar,
  CheckCircle
} from 'lucide-react';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Note: In a real implementation, you would configure EmailJS with your service ID, template ID, and user ID
      // For demo purposes, we'll simulate the email sending
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'alexandoh245@gmail.com',
      description: 'Send me an email anytime!',
      href: 'alexandoh245@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+233 550 259 458',
      description: 'Mon-Fri from 8am to 5pm',
      href: 'tel:+233 550 259 458'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Takoradi, Ghana',
      description: 'Available for remote work',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com',
      description: 'Check out my code'
    },
   
    {
      icon: MessageSquare,
      name: 'WhatsApp',
      href: 'https://wa.me/message/XZ5I6I6JL4TJG1',
      description: 'Message me directly'
    }
  ];

  const faqs = [
    {
      question: 'What\'s your typical response time?',
      answer: 'I usually respond to messages within 24 hours during business days.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes! I work with clients from all around the world and accommodate different time zones.'
    },
    {
      question: 'What\'s your project timeline?',
      answer: 'Project timelines vary based on complexity, but most projects take 2-8 weeks to complete.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Alex - Let's Build Something Amazing Together</title>
        <meta name="description" content="Get in touch with Alex for web development projects, collaborations, or general inquiries. Available for freelance work and consultations." />
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
                Let's <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Have a project in mind? Want to collaborate? Or just want to say hello? 
                I'd love to hear from you. Let's build something amazing together!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="glass-card"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Send className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Send a Message</h2>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 btn-outline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Project inquiry, collaboration, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Tell me about your project or what you'd like to discuss..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full btn-hero flex items-center justify-center space-x-2 ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>

              {/* Contact Info & Social */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-8"
              >
                {/* Contact Information */}
                <div className="glass-card">
                  <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <motion.a
                        key={item.title}
                        href={item.href}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="flex items-start space-x-4 p-4 bg-secondary/50 rounded-xl hover:bg-accent transition-colors"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-primary text-sm">{item.value}</p>
                          <p className="text-muted-foreground text-xs">{item.description}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="glass-card">
                  <h3 className="text-xl font-bold mb-6">Follow Me</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="flex items-center space-x-4 p-4 bg-secondary/50 rounded-xl hover:bg-accent transition-colors"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                          <social.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{social.name}</h4>
                          <p className="text-muted-foreground text-sm">{social.description}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="glass-card">
                  <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
                  <div className="space-y-3">
                    <motion.a
                      href="mailto:alex@example.com?subject=Project Inquiry"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent transition-colors"
                    >
                      <Coffee className="w-4 h-4 text-primary" />
                      <span className="text-sm">Schedule a coffee chat</span>
                    </motion.a>
                    <motion.a
                      href="/projects"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent transition-colors"
                    >
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm">View my availability</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about working with me.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-card"
                >
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;