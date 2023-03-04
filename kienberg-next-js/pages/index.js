import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kienberg | Home</title>
        <meta name="keywords" content="players" />
      </Head>
      <nav
        className="sticky top-20 z-10 hidden space-x-2 text-lg md:block"
        aria-label="main"
      >
        <a href="#home" className="hover:opacity-90">
          Home
        </a>
        <a href="#welcome2" className="hover:opacity-90">
          Leaders
        </a>
        <a href="#welcome3" className="hover:opacity-90">
        References
        </a>
      </nav>
      <section
        id="home"
        className="widescreen:section-min-height tallscreen:section-min-height mb-4 flex h-screen scroll-mt-20 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold sm:text-left sm:text-5xl">
            Welcome to official{" "}
            <span className="text-indigo-700 dark:text-indigo-300">
              Kienberg Athletic
            </span>{" "}
            website
          </h2>

          <p className="text-2xl mt-2 max-w-md text-center sm:text-left">
          Kienberg Athletic, a small football club located in the charming neighborhood of Berlin Hellersorf. Established in 2022, Kienberg Athletic is a young club with big aspirations. Despite its modest beginnings, the club has already made a name for itself in the local football community, and is well on its way to becoming a major player in the region.
          </p>

     
        </article>

        <Image
          src="/KBA400.png"
          width={400}
          height={400}
          alt="logo"
    
        />
      </section>

      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
      {/* //////////////////////////////////////////////////// */}

      <section
        id="welcome2"
        className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex h-screen scroll-mt-20 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
      >

<article className="sm:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold sm:text-left sm:text-5xl">
            Welcome to{" "}
            <span className="text-indigo-700 dark:text-indigo-300">
              Section
            </span>{" "}
            3
          </h2>

          <p className="text-2-xl mt-4 max-w-md text-center sm:text-left">
            section 3
          </p>

          {/*        <Link href="/users" >
          See players listing
        </Link> */}
        </article>


       
      </section>
      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
      {/* //////////////////////////////////////////////////// */}
      <section
        id="welcome3"
        className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex h-screen scroll-mt-20 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold sm:text-left sm:text-5xl">
            Welcome to{" "}
            <span className="text-indigo-700 dark:text-indigo-300">
              Section
            </span>{" "}
            2
          </h2>

          <figure className="my-12">
            <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                Acme has always been there for me. Their Explorer rocket arrived
                in a wooden crate as expected. Life-long customer! A++ shopping
                experience.
              </p>
            </blockquote>
            <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
              &#8212;Wile E. Coyote, Genius
            </figcaption>
          </figure>

          <p className="text-2-xl mt-4 max-w-md text-center sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fuga
            soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus harum facere illum voluptatem nobis similique ab quia odit
            obcaecati vel culpa quis aspernatur, at omnis expedita adipisci eum
            est amet!
          </p>

          {/*        <Link href="/users" >
          See players listing
        </Link> */}
        </article>
      </section>
    </>
  );
}
