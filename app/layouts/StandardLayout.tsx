import { Outlet } from "react-router";
import { Footer } from "~/components/commons/Footer";
import { Header } from "~/components/commons/Header";

export default function StandardLayout() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <div className="grow-1">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
