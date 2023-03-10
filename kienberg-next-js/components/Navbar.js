import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = ({ theme, toggleTheme }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToggleBtnActive, setIsToggleBtnActive] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsToggleBtnActive(!isToggleBtnActive); 
  };

  return (
    <div
      className={
        theme === "light"
          ? "sticky top-0 z-10 bg-kienbergGreen text-kienbergBlack"
          : "sticky top-0 z-10 bg-kienbergPurple text-kienbergWhite"
      }
    >
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-2xl font-medium">
          <Link
            href="/"
            className={
              currentRoute === "/"
                ? "active-class-name"
                : "non-active-class-name hover:opacity-80"
            }
          >
            <Image
              src="/Logo.png"
              width={64}
              height={64}
              alt="logo"
              className="mx-auto h-10 w-10 rounded-full"
            />{" "}
            <span
              className={
                theme === "light"
                  ? " text-kienbergBlack"
                  : " text-kienbergWhite"
              }
            >
              Kienberg Athletic
            </span>
          </Link>
        </h1>

        <div>
          <button
            onClick={toggleMenu}
            id="hamburger-button"
            className={
              isToggleBtnActive
                ? "toggle-btn relative h-8 w-8 cursor-pointer text-3xl md:hidden"
                : "relative h-8 w-8 cursor-pointer text-3xl md:hidden"
            }
          >
            {/*    &#9776; */}
            <div
              className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500
          before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-['']
          after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"
            ></div>
          </button>
        </div>

        <nav className="text-hl hidden space-x-8 sm:block" aria-label="main">
          <Link
            href="/about"
            className={
              currentRoute === "/about"
                ? "active-class-name"
                : "non-active-class-name hover:opacity-80"
            }
          >
            <span
              className={
                theme === "light"
                  ? " text-kienbergBlack"
                  : " text-kienbergWhite"
              }
            >
              About
            </span>
          </Link>
          <Link
            href="/standings"
            className={
              currentRoute === "/standings"
                ? "active-class-name"
                : "non-active-class-name hover:opacity-80"
            }
          >
            <span
              className={
                theme === "light"
                  ? " text-kienbergBlack"
                  : " text-kienbergWhite"
              }
            >
              Standings
            </span>
          </Link>
          <Link
            href="/players"
            className={
              currentRoute === "/players"
                ? "active-class-name"
                : "non-active-class-name hover:opacity-80"
            }
          >
            <span
              className={
                theme === "light"
                  ? " text-kienbergBlack"
                  : " text-kienbergWhite"
              }
            >
              Players
            </span>
          </Link>
          <Link
            href="/trophies"
            className={
              currentRoute === "/trophies"
                ? "active-class-name"
                : "non-active-class-name hover:opacity-80"
            }
          >
            <span
              className={
                theme === "light"
                  ? " text-kienbergBlack"
                  : " text-kienbergWhite"
              }
            >
              Trophies
            </span>
          </Link>
        
        </nav>
        <section className="flex max-w-4xl items-center justify-between p-4">
        <button
            onClick={toggleTheme}
            className="justify-center self-end px-6 align-middle text-2xl"
          >
            <Image
              src="/brightness.png"
              width={64}
              height={64}
              alt="dark-light-toggle"
              className="mx-auto h-10 w-10 rounded-full"
            />{" "}
          </button>
          </section>
      </section>
      <section
        id="mobile-menu"
        className={
          isMobileMenuOpen
            ? "top-68 absolute flex w-full origin-top animate-open-menu flex-col justify-center bg-black text-white text-5xl z-50 pt-16"
            : "hidden"
        }
        onClick={toggleMenu}
      >
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          <Link
            href="/"
            className="w-full py-6 text-center hover:opacity-80"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="w-full py-6 text-center hover:opacity-80"
          >
            About
          </Link>
          <Link
            href="/standings"
            className="w-full py-6 text-center hover:opacity-80"
          >
            Standings
          </Link>
          <Link href="/players" className="w-full py-6 text-center hover:opacity-80">
            Players
          </Link>
          <Link
            href="/trophies"
            className="w-full py-6 text-center hover:opacity-80"
          >
            Trophies
          </Link>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
