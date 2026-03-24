import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 p-8 rounded-2xl border border-green-100 text-center flex flex-col items-center gap-4"
      >
        <CheckCircle2 size={64} className="text-green-500" />
        <h3 className="text-2xl font-bold text-green-800">Message Sent Successfully!</h3>
        <p className="text-green-700">Thank you for reaching out. Our team will contact you within 24 hours to discuss your project.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-sm font-semibold text-green-600 hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-50 border border-gray-100 flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            required 
            placeholder="e.g. Rahul Sharma"
            className="px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number *</label>
          <input 
            type="tel" 
            id="phone" 
            required 
            placeholder="e.g. +91 98765 43210"
            className="px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address *</label>
        <input 
          type="email" 
          id="email" 
          required 
          placeholder="e.g. rahul@business.com"
          className="px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-sm font-semibold text-gray-700">Interested Service *</label>
        <select 
          id="service" 
          required
          className="px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
        >
          <option value="">Select a service</option>
          <option value="web-dev">Website Development</option>
          <option value="google-ads">Google Ads Management</option>
          <option value="social-media">Social Media Marketing</option>
          <option value="shopify">Shopify Store Development</option>
          <option value="other">Other / General Inquiry</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-gray-700">Your Message</label>
        <textarea 
          id="message" 
          rows={4}
          placeholder="Tell us about your business goals..."
          className="px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isLoading}
        className="bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {isLoading ? (
          <span className="animate-pulse">Processing...</span>
        ) : (
          <>
            <Send size={20} />
            Get Free Audit & Proposal
          </>
        )}
      </button>
      <p className="text-center text-xs text-gray-400">We respect your privacy. No spam, ever.</p>
    </form>
  );
}
