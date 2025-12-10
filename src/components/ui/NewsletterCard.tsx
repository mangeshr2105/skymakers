import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface NewsletterCardProps {
  title?: string;
  description?: string;
  placeholderEmail?: string;
  buttonText?: string;
  className?: string;
}

const NewsletterCard: React.FC<NewsletterCardProps> = ({
  title = 'Join Our Exclusive Community',
  description = 'Be the first to know about our premium property listings, exclusive events, and luxury real estate insights. Elevate your property journey with SkyMakers.',
  placeholderEmail = 'your@email.com',
  buttonText = 'Subscribe Now',
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative p-8 md:p-10 rounded-2xl overflow-hidden bg-gradient-to-b from-black via-gray-900 to-white border border-white/10 shadow-xl"
      >
        {/* Background overlay removed to reveal gradient */}
        
        {/* Content */}
        <div className="relative z-10">
          {isSubscribed ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <Check className="w-10 h-10 text-primary" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Welcome to SkyMakers!</h3>
              <p className="text-gray-200 mb-6">Thank you for subscribing. Check your email for a special welcome gift.</p>
              <button
                onClick={() => setIsSubscribed(false)}
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Back to form
              </button>
            </motion.div>
          ) : (
            <>
              {/* Icon */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, type: 'spring' }}
                className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-6 mx-auto border border-white/20"
              >
                <Mail className="w-8 h-8 text-white" strokeWidth={1.8} />
              </motion.div>
              
              {/* Title */}
              <motion.h2 
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold text-center text-white mb-4"
              >
                {title}
              </motion.h2>
              
              {/* Description */}
              <motion.p 
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-200 text-center mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
              >
                {description}
              </motion.p>
              
              {/* Form */}
              <motion.form 
                onSubmit={handleSubmit} 
                className="max-w-md mx-auto"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={placeholderEmail}
                      className="w-full px-5 py-3.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200 text-white placeholder-gray-300"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-6 py-3.5 bg-forest hover:bg-gold text-white hover:text-dark font-medium rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/40 shadow-md hover:shadow-lg whitespace-nowrap flex items-center justify-center min-w-[120px] ${
                      isLoading ? 'opacity-80 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Subscribing...
                      </>
                    ) : (
                      buttonText
                    )}
                  </button>
                </div>
                <p className="mt-3 text-xs text-center text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </motion.form>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default NewsletterCard;
