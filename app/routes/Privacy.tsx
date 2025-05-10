import { Fragment } from 'react/jsx-runtime';
import type { Route } from './+types/Privacy';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'tuanhuydev - Privacy Policy' },
    {
      name: 'description',
      content:
        'Learn about how tuanhuy.dev collects, uses, and protects your personal information. Our privacy policy details our commitment to data security, cookie usage, and information handling practices.',
    },
  ];
}

export default function Privacy() {
  return (
    <Fragment>
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">Last updated: 2024/04/09</p>

      <div className="space-y-6">
        <p className="text-gray-700">
          Welcome to tuanhuy.dev (referred to as "us", "we", or "our").
          Protecting your privacy is important to us. This Privacy Policy
          outlines how we collect, use, and safeguard your personal information
          when you visit our website and interact with our services. By using
          our website, you agree to the terms outlined in this policy.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Information Collection And Use
          </h2>
          <p className="text-gray-700 mb-4">
            While using our Service, we may collect certain personally
            identifiable information to enhance your experience and provide you
            with our services. However, we do not require any form submission
            from the user. The information we may collect includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Log Data:</strong> When you visit our website, we may
              automatically receive and record information from your browser,
              such as your computer's Internet Protocol ("IP") address, browser
              type, browser version, the pages of our Service that you visit,
              the time and date of your visit, the time spent on those pages,
              and other statistics.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies, which are small pieces
              of data stored on your device, to improve your browsing experience
              and customize our services. You can choose to accept or decline
              cookies through your browser settings.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Service Providers</h2>
          <p className="text-gray-700">
            We may engage third-party companies and individuals to assist us in
            providing and improving our services, analyze how our Service is
            used, and perform other service-related tasks. These third parties
            have access to your personal information only to perform these tasks
            on our behalf and are obligated not to disclose or use it for any
            other purpose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Security</h2>
          <p className="text-gray-700">
            We are committed to protecting the security of your personal
            information. However, please be aware that no method of transmission
            over the Internet or method of electronic storage is 100% secure.
            While we strive to use commercially acceptable means to protect your
            personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Changes To This Privacy Policy
          </h2>
          <p className="text-gray-700">
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be effective immediately upon posting the
            updated Privacy Policy on this page. We encourage you to review this
            Privacy Policy periodically to stay informed about how we are
            protecting your information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at{' '}
            <a
              href="mailto:tuanhuydev@gmail.com"
              className="text-blue-600 hover:underline"
            >
              tuanhuydev@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </Fragment>
  );
}
