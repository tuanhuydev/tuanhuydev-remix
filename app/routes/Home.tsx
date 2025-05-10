import Contact from '~/components/contact';
import ExperienceSection from '~/components/ServiceSection';
import { Hero } from '~/components/commons/Hero';
import type { Route } from './+types/Home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'tuanhuydev' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div className="w-4/5 lg:w-4xl mx-auto">
      <Hero />
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium mb-2">Project {item}</h3>
              <p className="text-gray-600 mb-4">
                A brief description of this amazing project using cutting-edge
                technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  TypeScript
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  Node.js
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
        <div className="space-y-6">
          {[1, 2, 3].map((item) => (
            <article key={item} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-medium mb-2">
                Understanding Modern Web Architecture
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                Published on June {item}, 2023
              </p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a
                href="#"
                className="inline-block mt-3 text-blue-600 hover:underline"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </section>
      <ExperienceSection />
      <Contact />
    </div>
  );
}
