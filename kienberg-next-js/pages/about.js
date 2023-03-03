import Head from "next/head";
const About = () => {
  return (
    <section className="mb-2 flex h-screen scroll-mt-10 flex-col-reverse items-center justify-center gap-4 p-6 sm:flex-row">
      <Head>
        <title>Kienberg | About</title>
        <meta name="keywords" content="players" />
      </Head>

      <article className="sm:w-1/2">
        <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
          About
        </h2>
        <p className="text-2-xl mt-4 max-w-md text-center sm:text-left">
          Kienberg Athletic, a small football club located in the charming
          neighborhood of Berlin Hellersorf. Established in 2022, Kienberg
          Athletic is a young club with big aspirations. Despite its modest
          beginnings, the club has already made a name for itself in the local
          football community, and is well on its way to becoming a major player
          in the region.
        </p>
        <p className="text-2-xl mt-4 max-w-md text-center sm:text-left">
          We are proud to call Kienberg Waldeckpark our home
          stadium. With a seating capacity of 500, this intimate venue offers
          fans a unique and personal viewing experience. Whether you're a
          die-hard supporter or a casual fan, you're sure to feel right at home
          in our stands.
        </p>
        <p className="text-2-xl mt-4 max-w-md text-center sm:text-left">
          At the heart of Kienberg Athletic is our team of dedicated and
          passionate players. Currently consisting of 20 talented athletes, our
          team is led by our club President, Dimi Benert. Under his guidance,
          our players are constantly striving to improve their skills and
          achieve greatness on the field.
        </p>
        <p className="text-2-xl mt-4 max-w-md text-center sm:text-left">
          While Kienberg Athletic has yet to win any major championships, we are
          confident that our hard work and determination will pay off soon. With
          a bright future ahead of us, we invite you to join us on our journey
          and experience the excitement and energy of Kienberg Athletic
          football.
        </p>
      </article>
    </section>
  );
};

export default About;
