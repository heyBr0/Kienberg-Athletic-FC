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
        <div className="pt-1 pb-3">
          <p>Kienberg Athletic Gmbh</p>
          <p> 12619 Berlin, Deutschland</p>
          <p>kienberg-athletic@live.de</p>
        </div>
    
        <div className="flex flex-col pt-1 pb-3 sm:gap-1">
          <p className="text-right">
            Copyright &copy; <span id="year">2023</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
