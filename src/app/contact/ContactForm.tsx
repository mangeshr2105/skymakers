"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (formData.phone && !/^\+?[0-9\s()-]{7,}$/.test(formData.phone)) newErrors.phone = 'Enter a valid phone number';
    if (!formData.message.trim()) newErrors.message = 'Please add a short message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <svg className="mx-auto h-12 w-12 text-forest" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm4.28 7.47a.75.75 0 0 0-1.06-1.06l-4.72 4.72-1.72-1.72a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25Z" clipRule="evenodd" />
        </svg>
        <h2 className="mt-4 text-xl font-semibold text-gray-900">Thanks, we&apos;ve received your message!</h2>
        <p className="mt-2 text-gray-600">Our team will get back to you shortly.</p>
        <div className="mt-6">
          <Link href="/" className="text-forest hover:text-gold font-medium">Return to home</Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
          <input
            type="text"
            className={`w-full rounded-lg border ${errors.name ? 'border-red-400' : 'border-gray-300'} bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50`}
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className={`w-full rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-300'} bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50`}
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              className={`w-full rounded-lg border ${errors.phone ? 'border-red-400' : 'border-gray-300'} bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50`}
              placeholder="+971 50 123 4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
          <textarea
            rows={5}
            className={`w-full rounded-lg border ${errors.message ? 'border-red-400' : 'border-gray-300'} bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest/50`}
            placeholder="Tell us a bit about your needs..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
        </div>
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center rounded-lg bg-forest px-6 py-3 text-white font-medium hover:bg-gold hover:text-dark transition-colors disabled:opacity-60"
          >
            {isSubmitting ? 'Sending…' : 'Send message'}
          </button>
        </div>
      </div>
    </form>
  );
}


