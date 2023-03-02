import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
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
