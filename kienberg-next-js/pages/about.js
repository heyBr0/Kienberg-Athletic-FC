import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>Kienberg | About</title>
        <meta name="keywords" content="about" />
      </Head>

      <nav className="sticky top-20 z-10 ml-12 hidden space-x-2 text-base md:block">
        <a href="#story" className="hover:opacity-90">
          Story
        </a>
        <a href="#stadium" className="hover:opacity-90">
          Stadium
        </a>
      </nav>

      <section
        id="story"
        className="mb-2 flex h-screen scroll-mt-10 items-center justify-center gap-4 p-6"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold sm:text-left sm:text-5xl">
            About
          </h2>

          <p className="text-lg mt-4 max-w-md text-justify">
            We are proud to call Kienberg Waldeckpark our home stadium. With a
            seating capacity of 500, this intimate venue offers fans a unique
            and personal viewing experience. Whether you're a die-hard supporter
            or a casual fan, you're sure to feel right at home in our stands.
          </p>
          <p className="text-lg mt-4 max-w-md text-justify">
            At the heart of Kienberg Athletic is our team of dedicated and
            passionate players. Currently consisting of 20 talented athletes,
            our team is led by our club President, Dimi Benert. Under his
            guidance, our players are constantly striving to improve their
            skills and achieve greatness on the field.
          </p>
          <p className="text-lg mt-4 max-w-md text-justify">
            While Kienberg Athletic has yet to win any major championships, we
            are confident that our hard work and determination will pay off
            soon. With a bright future ahead of us, we invite you to join us on
            our journey and experience the excitement and energy of Kienberg
            Athletic football.
          </p>
        </article>
      </section>

      <section
        id="stadium"
        className="mb-2 flex h-screen scroll-mt-10 flex-col-reverse items-center justify-center gap-4 p-6 sm:flex-row"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold sm:text-left sm:text-5xl">
            Kienberg{" "}
            <span className="text-indigo-700 dark:text-indigo-300">
              Waldeckpark
            </span>{" "}
          </h2>

          <Image
            src="/stadium.jpeg"
            width={650}
            height={650}
            alt="stadium"
            className="mt-6 mb-6"
          />

          <p className="text-lg mt-2 max-w-md text-justify">
            Kienberg Athletic's home stadium, Waldeckpark, is a special place
            for both our players and fans alike. With a seating capacity of
            1000, it provides an intimate atmosphere that allows our supporters
            to feel closely connected to the game. But it's not just a place for
            matches – Waldeckpark is also used as a training ground for both our
            main team and our U-19 team. This allows us to develop our players'
            skills in a familiar environment, and ensures that they are always
            in top shape for game day. We take great pride in our stadium, and
            we believe that it's one of the key factors that makes Kienberg
            Athletic such a special club.
          </p>
        </article>
      </section>
    </>
  );
};

export default About;
