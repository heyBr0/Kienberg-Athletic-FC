
const Footer = () => {
    return ( 
        <div id="footer" class="bg-teal-700 text-xl text-white">
        <div class="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
          <div className="pt-1 pb-5" >
            <p>Kienberg Athletic Gmbh</p>       
            <p> Fairfield, New Jersey 12345-5555</p>
            <p>
              {" "}
              Email:{" "}
              <a href="mailto:inquiries@acmerockets.com">
                Inquires@AcmeRockets.com
              </a>
            </p>
            <p>
              Phone: <a href="tel:+15555555555">(555) 555-5555</a>
            </p>
          </div>
          <nav class="hidden flex-col gap-2 md:flex pt-1 pb-5" aria-label="footer">
            <a href="#rockets" class="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" class="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" class="hover:opacity-90">
              Contact Us
            </a>
          </nav>
          <div class="flex flex-col sm:gap-2 pt-1 pb-5">
            <p class="text-right">
              Copyright &copy; <span id="year">2023</span>
            </p>
            <p class="text-right">All Rights Reserved</p>
          </div>
        </div>
      </div>
     );
}
 
export default Footer;