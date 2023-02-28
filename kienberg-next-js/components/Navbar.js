import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <nav>
      <div className="logo">
        <h2>Kienberg Athletic</h2>
        <Image
          src="/8957173.png"
          width={64}
          height={64}
          alt="logo"
          className="w-14 h-14 rounded-full mx-auto"
        />
      </div>
      <Link
        href="/"
        className={
          currentRoute === "/" ? "active-class-name" : "non-active-class-name"
        }
      >
        Home
      </Link>
      <Link
        href="/about"
        className={
          currentRoute === "/about"
            ? "active-class-name"
            : "non-active-class-name"
        }
      >
        About
      </Link>
      <Link
        href="/standings"
        className={
          currentRoute === "/standings"
            ? "active-class-name"
            : "non-active-class-name"
        }
      >
        Standings
      </Link>
      <Link
        href="/users"
        className={
          currentRoute === "/users"
            ? "active-class-name"
            : "non-active-class-name"
        }
      >
        Players Listing
      </Link>
      <Link
        href="/tailwindTesting"
        className={
          currentRoute === "/tailwindTesting"
            ? "active-class-name"
            : "non-active-class-name"
        }
      >
        tailwindTesting
      </Link>
    </nav>
  );
};

export default Navbar;
