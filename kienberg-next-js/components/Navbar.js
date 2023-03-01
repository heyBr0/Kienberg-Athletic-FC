import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

 /*  const initApp = () => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");

    const toggleMenu = () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    };

    hamburgerBtn.addEventListener("click", toggleMenu);
    mobileMenu.addEventListener("click", toggleMenu);
  }; */
  return (
    <div className="sticky top-0 z-10 text-white" id="navbar">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-2xl font-medium">
          <Link
            href="/"
            className={
              currentRoute === "/"
                ? "active-class-name"
                : "non-active-class-name hover:opacity-90"
            }
          >
            <Image
              src="/8957173.png"
              width={64}
              height={64}
              alt="logo"
              className="mx-auto h-10 w-10 rounded-full"
            />{" "}
            Kienberg Athletic
          </Link>
        </h1>

        <div>
          <button /* onClick={initApp} */
            id="hamburger-button"
            className="cursor-pointer text-3xl md:hidden"
          >
            &#9776;
          </button>
        </div>

        <nav className="text-hl hidden space-x-8 sm:block" aria-label="main">
          <Link
            href="/about"
            className={
              currentRoute === "/about"
                ? "active-class-name"
                : "non-active-class-name hover:opacity-90"
            }
          >
            About
          </Link>
          <Link
            href="/standings"
            className={
              currentRoute === "/standings"
                ? "active-class-name"
                : "non-active-class-name hover:opacity-90"
            }
          >
            Standings
          </Link>
          <Link
            href="/users"
            className={
              currentRoute === "/users"
                ? "active-class-name"
                : "non-active-class-name hover:opacity-90"
            }
          >
            Players Listing
          </Link>
          <Link
            href="/tailwindTesting"
            className={
              currentRoute === "/tailwindTesting"
                ? "active-class-name"
                : "non-active-class-name hover:opacity-90"
            }
          >
            tailwindTesting
          </Link>
        </nav>
      </section>
      <section
        id="mobile-menu"
        className="absolute top-0 hidden w-full origin-top animate-open-menu flex-col justify-center bg-black text-5xl"
      >
        <button className="self-end px-6 text-8xl">&times;</button>
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          <a
            href="#welcome1"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Home
          </a>
          <a
            href="#welcome2"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Tickers
          </a>
          <a
            href="#welcome3"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Kits
          </a>
          <a href="#about" className="w-full py-6 text-center hover:opacity-90">
            About
          </a>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
