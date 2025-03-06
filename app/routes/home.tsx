import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "tuanhuydev" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to tuanhuydev</h1>
        <p className="text-xl text-gray-600 mt-2">Full-Stack Developer & Technology Enthusiast</p>
      </header>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          Hi there! I'm a passionate developer with expertise in React, TypeScript, and modern web technologies.
          With over 5 years of experience building robust web applications, I focus on creating elegant solutions
          to complex problems.
        </p>
        <p className="text-gray-700">
          When I'm not coding, you can find me exploring new tech, contributing to open-source, or hiking in the mountains.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium mb-2">Project {item}</h3>
              <p className="text-gray-600 mb-4">A brief description of this amazing project using cutting-edge technologies.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">TypeScript</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Node.js</span>
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
              <h3 className="text-xl font-medium mb-2">Understanding Modern Web Architecture</h3>
              <p className="text-gray-500 text-sm mb-3">Published on June {item}, 2023</p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="#" className="inline-block mt-3 text-blue-600 hover:underline">Read more →</a>
            </article>
          ))}
        </div>
      </section>
      
      <footer className="border-t border-gray-200 pt-8 text-center text-gray-600">
        <p>© 2023 tuanhuydev. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-gray-800">GitHub</a>
          <a href="#" className="text-gray-500 hover:text-gray-800">LinkedIn</a>
          <a href="#" className="text-gray-500 hover:text-gray-800">Twitter</a>
          <a href="#" className="text-gray-500 hover:text-gray-800">Contact</a>
        </div>
      </footer>
    </div>
  );
}
