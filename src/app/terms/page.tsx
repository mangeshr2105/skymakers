import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Skymakers',
  description: 'Read Skymakers Terms and Conditions outlining the use of our services and website.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Terms & Conditions</h1>
            <p className="mt-3 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <p>
              Welcome to Skymakers. These Terms & Conditions (&quot;Terms&quot;) govern your access to and use of our
              website, products, and services (collectively, the &quot;Services&quot;). By accessing or using the Services,
              you agree to be bound by these Terms.
            </p>

            <h2 className="text-xl font-semibold text-foreground">1. Eligibility</h2>
            <p>
              You must be at least 18 years old and capable of forming a binding contract to use our Services.
              By using the Services, you represent and warrant that you meet these requirements.
            </p>

            <h2 className="text-xl font-semibold text-foreground">2. Use of Services</h2>
            <p>
              You agree to use the Services only for lawful purposes and in accordance with these Terms. You will
              not misuse the Services or attempt to interfere with their proper operation.
            </p>

            <h2 className="text-xl font-semibold text-foreground">3. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and other intellectual property appearing on the Services are owned by
              Skymakers or our licensors and are protected by applicable laws. You may not reproduce, distribute, or
              create derivative works without our prior written consent.
            </p>

            <h2 className="text-xl font-semibold text-foreground">4. Third-Party Links</h2>
            <p>
              Our Services may contain links to third-party websites. We do not control and are not responsible for
              the content or practices of these third parties. Accessing third-party sites is at your own risk.
            </p>

            <h2 className="text-xl font-semibold text-foreground">5. Disclaimers</h2>
            <p>
              The Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether
              express or implied. To the fullest extent permitted by law, Skymakers disclaims all warranties,
              including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h2 className="text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Skymakers shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
              directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from
              your use of the Services.
            </p>

            <h2 className="text-xl font-semibold text-foreground">7. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Skymakers, its affiliates, officers, directors, employees,
              and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in
              any way connected with your access to or use of the Services or your violation of these Terms.
            </p>

            <h2 className="text-xl font-semibold text-foreground">8. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The updated version will be indicated by an updated
              &quot;Last updated&quot; date and will be effective as soon as it is accessible. Your continued use of the
              Services signifies your acceptance of the revised Terms.
            </p>

            <h2 className="text-xl font-semibold text-foreground">9. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the United Arab Emirates,
              without regard to its conflict of law principles.
            </p>

            <h2 className="text-xl font-semibold text-foreground">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us via the
              {' '}<Link href="/contact" className="text-forest hover:text-gold">contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


