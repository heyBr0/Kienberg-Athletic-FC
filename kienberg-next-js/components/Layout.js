import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div
      className={
        theme === "light"
          ? "mx-auto min-h-screen bg-kienbergWhite text-kienbergBlack"
          : "mx-auto min-h-screen bg-kienbergBlack text-kienbergWhite"
      }
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="mx-auto max-w-4xl">{children}</main>
      <Footer theme={theme} />
    </div>
  );
};

export default Layout;
