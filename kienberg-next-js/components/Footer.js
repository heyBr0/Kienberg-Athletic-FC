import Link from "next/link";

const Footer = ({ theme }) => {
  return (
    <div
      id="footer"
      className={
        theme === "light"
          ? " bg-kienbergGreen text-xl text-kienbergBlack"
          : " bg-kienbergPurple text-xl text-kienbergWhite"
      }
    >
      <div className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
        <div className="pt-1 pb-1">
          <p>Kienberg Athletic GmbH</p>
          <p> 12619 Berlin, Deutschland</p>
          <p>kienberg-athletic@official.com</p>
        </div>
    
        <div className="flex flex-col pt-1 pb-1 sm:gap-1">
          <p className="text-right">
            Copyright &copy; <span id="year">2023</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
          <p className="text-right">
            <Link href="https://github.com/heyBr0" target="_blank">Click to contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
