import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Navbar />
      <main className="mx-auto max-w-4xl">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
