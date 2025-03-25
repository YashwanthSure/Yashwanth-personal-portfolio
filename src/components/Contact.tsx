
import React, { useState } from 'react';
import { Github, Linkedin, Mail, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}

const ContactCard = ({ icon, title, value, href }: ContactCardProps) => {
  return (
    <a 
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      className="glass p-6 rounded-2xl flex items-center space-x-4 card-highlight border border-border/50"
    >
      <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </a>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-spacing bg-secondary/50">
      <div className="container-custom">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6 animate-slide-up">Contact Me</h2>
          <p className="body-lg animate-slide-up" style={{ animationDelay: '150ms' }}>
            Interested in working together? I'm always open to discussing new projects,
            creative ideas or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="heading-md mb-6">Get in Touch</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ContactCard 
                icon={<Mail size={24} />}
                title="Email"
                value="hello@yashwanth.dev"
                href="mailto:hello@yashwanth.dev"
              />
              <ContactCard 
                icon={<Phone size={24} />}
                title="Phone"
                value="+1 (555) 123-4567"
                href="tel:+15551234567"
              />
            </div>
            
            <h3 className="heading-sm pt-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-12 w-12 bg-muted rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-12 w-12 bg-muted rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-8 border border-border/50">
            <h3 className="heading-sm mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <MessageSquare className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
