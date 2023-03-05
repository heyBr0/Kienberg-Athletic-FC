import Head from "next/head";
import Image from "next/image";
import connect from "../mongoClient";
import Link from "next/link";

export async function getServerSideProps() {
  const db = await connect();
  const collection = db.collection("leaders");
  const data = await collection.find().toArray();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Kienberg | Home</title>
        <meta name="keywords" content="players" />
      </Head>
      <nav
        className="sticky top-20 z-10 hidden space-x-3 text-base md:block"
        aria-label="main"
      >
        <a href="#home" className="hover:opacity-90">
          Home
        </a>
        <a href="#welcome2" className="hover:opacity-90">
          Leaders
        </a>
        <a href="#welcome3" className="hover:opacity-90">
          Testimonials
        </a>
      </nav>
      <section
        id="home"
        className="widescreen:section-min-height tallscreen:section-min-height mb-4 flex h-screen scroll-mt-20 flex-col-reverse items-center justify-center gap-12 p-4 sm:flex-row"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold sm:text-left sm:text-5xl">
            Welcome to official{" "}
            <span className="text-indigo-700 dark:text-indigo-300">
              Kienberg Athletic
            </span>{" "}
            website
          </h2>

          <p className="mt-2 max-w-md text-justify text-2xl">
            Kienberg Athletic, a small football club located in the charming
            neighborhood of Berlin Hellersorf. Established in 2022, Kienberg
            Athletic is a young club with big aspirations. Despite its modest
            beginnings, the club has already made a name for itself in the local
            football community, and is well on its way to becoming a major
            player in the region.
          </p>
        </article>

        <Image src="/KBA400.png" width={400} height={400} alt="logo" />
      </section>

      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
      {/* //////////////////////////////////////////////////// */}

      <section
        id="welcome2"
        className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex h-screen scroll-mt-20 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-left text-4xl font-bold sm:text-left sm:text-5xl">
            Our
            <span className="p-4 text-indigo-700 dark:text-indigo-300">
              Leaders
            </span>{" "}
            <p className="text-xl">Most assists, goals and clean sheets:</p>
          </h2>

          <div className="m-4 gap-4 p-4 text-left text-xl">
            {data.map((item) => (
              <div
                key={item._id}
                className="m-2 w-38 border-l-8 p-4 hover:border-l-[#A0DD9F] max-h-48"
              >
                {item.role === "midfielder" && (
                  <div className="w-48 h-48">
                    <>
                      <img
                        src={item.image}
                        alt={`${item.fname} ${item.lname}`}
                        className="w-2/5"
                      />

                      <section>
                        <span>{item.fname} </span>
                        <span> {item.lname}</span>
                        <p>
                          Apps: <span> {item.apps}</span>
                        </p>
                        <p className="text-[#A0DD9F]">
                          Assists: <span> {item.assists}</span>
                        </p>
                      </section>
                    </>
                  </div>
                )}
                    {item.role === "forward" && (
                  <div className="w-48 h-48">
                    <>
                      <img
                        src={item.image}
                        alt={`${item.fname} ${item.lname}`}
                        className="w-2/5"
                      />

                      <section>
                        <span>{item.fname} </span>
                        <span> {item.lname}</span>
                        <p>
                          Apps: <span> {item.apps}</span>
                        </p>
                        <p className="text-[#A0DD9F]">
                          Goals: <span> {item.goals}</span>
                        </p>
                      </section>
                    </>
                  </div>
                )}
                    {item.role === "goalkeeper" && (
                  <div className="w-48 h-48">
                    <>
                      <img
                        src={item.image}
                        alt={`${item.fname} ${item.lname}`}
                        className="w-2/5"
                      />

                      <section>
                        <span>{item.fname} </span>
                        <span> {item.lname}</span>
                        <p>
                          Apps: <span> {item.apps}</span>
                        </p>
                        <p className="text-[#A0DD9F]">
                          Clean sheets: <span> {item.cleanSheet}</span>
                        </p>
                      </section>
                    </>
                  </div>
                )}
              </div>
            ))}
          </div>
<button className="bg-[#7F5A83] border-white w-60 p-4 border-radius-8">
<Link href="/players">See all players and stats</Link>
</button>
      
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
            <span className="text-indigo-700 dark:text-indigo-300">
              Testimonials
            </span>{" "}
          </h2>

          <figure className="my-12">
            <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                One day we will meet in the Champions League.
              </p>
            </blockquote>
            <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
              &#8212;Jürgen Klopp
            </figcaption>
          </figure>

          <p className="mt-4 max-w-md text-justify text-lg ">
            Dear Jürgen, thank you for your kind words and the confidence you
            have in our team. It would be an honor to meet you and your team in
            the Champions League someday. We hope to continue to work hard and
            improve our skills, and we look forward to the possibility of
            competing against one of the greats of European football. Best
            regards, Kienberg Athletic
          </p>

          {/*        <Link href="/users" >
          See players listing
        </Link> */}
        </article>
      </section>
    </>
  );
}
