import { Outlet } from 'react-router';
import { Footer } from '~/components/commons/Footer';
import { Header } from '~/components/commons/Header';

export default function StandardLayout() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 px-4 pt-8">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
