import React, { useState } from 'react';
import { personalInfo } from '../../data';
import AnimatedSection from '../ui/AnimatedSection';
import Toast from '../ui/Toast';
import { sendEmail } from '../../utils/emailService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
    isVisible: boolean;
  }>({
    message: '',
    type: 'info',
    isVisible: false
  });

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }

    // Message length validation
    if (formData.message.trim().length < 10) {
      showToast('Message must be at least 10 characters long', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Submitting form with data:', formData);
      
      // Send email using configured service
      const success = await sendEmail(formData);
      
      if (success) {
        showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        showToast('Failed to send message. Please check your configuration and try again.', 'error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('Failed to send message. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      <section id="contact" className="section-padding bg-apple-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-apple-gray-600 mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-apple-blue to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-apple-gray-500 mt-4 max-w-2xl mx-auto">
              Let's collaborate on your next project or just have a chat about technology
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection delay={200}>
            <div>
              <h3 className="text-2xl font-bold text-apple-gray-600 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-lg text-apple-gray-500 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about the latest in frontend development. Feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-apple-blue/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-apple-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-apple-gray-600">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-apple-gray-500 hover:text-apple-blue transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-apple-blue/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-apple-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-apple-gray-600">Location</p>
                    <p className="text-apple-gray-500">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-apple-blue/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-apple-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-apple-gray-600">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-apple-gray-500 hover:text-apple-blue transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-apple-gray-600 font-semibold mb-4">Follow me on:</p>
                <div className="flex space-x-4">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-apple-gray-500 hover:text-apple-blue hover:shadow-lg transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-apple-gray-500 hover:text-apple-blue hover:shadow-lg transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="bg-white rounded-2xl p-8 card-shadow">
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                data-netlify="true"
                name="contact"
                method="POST"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-apple-gray-600 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-apple-gray-200 rounded-xl focus:ring-2 focus:ring-apple-blue focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-apple-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-apple-gray-200 rounded-xl focus:ring-2 focus:ring-apple-blue focus:border-transparent outline-none transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-apple-gray-600 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-apple-gray-200 rounded-xl focus:ring-2 focus:ring-apple-blue focus:border-transparent outline-none transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 font-semibold rounded-xl transition-colors duration-200 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-apple-blue text-white hover:bg-blue-600'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;