import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Skymakers',
  description: 'Learn how Skymakers collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Privacy Policy</h1>
            <p className="mt-3 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <p>
              At Skymakers (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), we respect your privacy and are committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you visit our website and use our services (collectively, the &quot;Services&quot;).
            </p>

            <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> such as name, email address, phone number, and preferences you provide.</li>
              <li><strong>Usage Data:</strong> information on how you access and use the Services (e.g., page views, interactions).</li>
              <li><strong>Cookies and Similar Technologies:</strong> used to enhance your experience and analyze usage.</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <ul>
              <li>To provide, operate, and maintain the Services.</li>
              <li>To communicate with you, including responding to inquiries and sending updates.</li>
              <li>To personalize and improve user experience.</li>
              <li>To analyze usage and performance to improve our Services.</li>
              <li>To comply with legal obligations and enforce our policies.</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground">3. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to monitor activity and store certain information. You can
              instruct your browser to refuse cookies or indicate when a cookie is being sent. However, if you do not
              accept cookies, some parts of the Services may not function properly.
            </p>

            <h2 className="text-xl font-semibold text-foreground">4. Third-Party Services</h2>
            <p>
              We may use third-party services (e.g., analytics, embedded content) that collect, monitor, and analyze
              information to provide and improve our Services. These third parties have their own privacy policies addressing
              how they use such information.
            </p>

            <h2 className="text-xl font-semibold text-foreground">5. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your information.
              However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>

            <h2 className="text-xl font-semibold text-foreground">6. Your Rights</h2>
            <p>
              Depending on your location, you may have rights regarding your personal information, such as access, correction,
              deletion, restriction, or objection to processing. To exercise these rights, please contact us.
            </p>

            <h2 className="text-xl font-semibold text-foreground">7. Children’s Privacy</h2>
            <p>
              Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal
              information from children. If you believe a child has provided us with personal information, please contact us
              so we can take appropriate action.
            </p>

            <h2 className="text-xl font-semibold text-foreground">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
              &quot;Last updated&quot; date. Your continued use of the Services following changes indicates your acceptance of the
              revised policy.
            </p>

            <h2 className="text-xl font-semibold text-foreground">9. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us via the
              {' '}<Link href="/contact" className="text-forest hover:text-gold">contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


