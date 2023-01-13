import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h2>Users List</h2>
        <Image src="/8957173.png" width={64} height={64} alt="logo"/>
      </div>
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        About
      </Link>
      <Link href="/users">
       Users Listing
      </Link>
    </nav>
  );
};

export default Navbar;
