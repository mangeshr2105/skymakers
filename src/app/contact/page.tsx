import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Skymakers',
  description: 'Get in touch with Skymakers for buying, selling, or renting properties in Dubai.',
};

export default function ContactPage() {
  return (
    <section className="py-0 bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-forest">Contact Us</h1>
          <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to learn about your goals. Share a few details and our team will reach out shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-lg font-semibold text-gray-900">Contact details</h3>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 text-forest" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.03-.24c1.12.37 2.33.57 3.56.57a1 1 0 011 1V21a1 1 0 01-1 1C10.4 22 2 13.6 2 3a1 1 0 011-1h3.49a1 1 0 011 1c0 1.23.2 2.44.57 3.56a1 1 0 01-.24 1.03l-2.2 2.2z"/></svg>
                  <span>+971 50 123 4567</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 text-forest" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v.26l-9.75 5.85-9.75-5.85v-.26z"/><path d="M2.25 8.21v9.04A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V8.21l-9.26 5.56a2.25 2.25 0 01-2.28 0L2.25 8.21z"/></svg>
                  <span>hello@skymakers.ae</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 text-forest" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M11.42 2.06a1 1 0 011.16 0l8.25 5.83a1 1 0 01.41.81V20a2 2 0 01-2 2H4.76a2 2 0 01-2-2V8.7a1 1 0 01.41-.81l8.25-5.83zM12 4.7L6.07 8.93V20h11.86V8.93L12 4.7z" clipRule="evenodd"/></svg>
                  <span>Office No. 105, Building no. 3,<br/>  
                  Bay Square, Business Bay,<br/>
                  Dubai, U.A.E.<br/>
                  P.O. Box - 128840</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}


