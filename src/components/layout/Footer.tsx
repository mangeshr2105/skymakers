import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const navigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/skymakersrealestate',
      icon: FaInstagram,
    },
    {
      name: 'X (Twitter)',
      href: 'https://twitter.com/skymakers',
      icon: FaXTwitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/skymakers',
      icon: FaLinkedin,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-light-1" aria-labelledby="footer-heading">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6 xl:col-span-1">
            <Link href="/" className="text-2xl font-bold text-gold hover:text-gold-light transition-colors">
              Skymakers
            </Link>
            <p className="text-light-3 text-base">
            YOUR GATEWAY TO DUBAI&apos;S REAL ESTATE
            </p>
            <address className="mt-4 not-italic text-light-3 text-sm">
              Office No. 105, Building no. 3,<br />
              Bay Square, Business Bay,<br />
              Dubai, U.A.E.<br />
              P.O. Box - 128840
            </address>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-light-4 hover:text-gold transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-light-3 tracking-wider uppercase">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-light-4 hover:text-gold transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-light-3 tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-light-4 hover:text-gold transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1">
              <div>
                <h3 className="text-sm font-semibold text-light-3 tracking-wider uppercase">Subscribe to our newsletter</h3>
                <p className="mt-4 text-base text-light-4">
                  The latest news, articles, and resources, sent to your inbox weekly.
                </p>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="min-w-0 flex-auto rounded-md border-0 bg-light-5/10 text-dark px-3.5 py-2 shadow-sm ring-1 ring-inset ring-light-3/20 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-forest px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gold hover:text-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-light-3/20 pt-8">
          <p className="text-base text-light-4 text-center">
            &copy; {new Date().getFullYear()} Skymakers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
