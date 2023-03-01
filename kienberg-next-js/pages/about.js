import Head from "next/head";
const About = () => {
  return (
    <section className="mb-12 flex h-screen scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row">
      <Head>
        <title>Kienberg | About</title>
        <meta name="keywords" content="users" />
      </Head>

      <article className="sm:w-1/2">
        <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
          About
        </h2>
        <p className="text-2-xl mt-4 max-w-md text-center sm:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          incidunt, voluptas hic eos voluptate similique expedita, qui dicta
          recusandae necessitatibus reprehenderit corrupti aperiam debitis.
          Numquam id ea excepturi hic blanditiis?
        </p>
      </article>
    </section>
  );
};

export default About;
