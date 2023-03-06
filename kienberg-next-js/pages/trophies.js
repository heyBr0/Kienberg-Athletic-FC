import Image from "next/image";
import Head from "next/head";

const Trophies = () => {
  return (
    <div>
      <Head>
        <title>Kienberg | Trophies</title>
        <meta name="keywords" content="trophies" />
      </Head>
      <section className="mb-2 flex h-screen items-center justify-center gap-4 p-4 sm:flex-row">
        <article className="sm:w-1/2">
          <p className="mt-2 max-w-md text-justify text-xl">
            While Kienberg Athletic has not yet won any major trophies, we are
            confident that our hard work and dedication will pay off in the near
            future. Our players are constantly striving to improve their skills
            and work together as a team, and we believe that this will lead to
            success on the field. We have our sights set on the
            <span className="pl-2 pr-2 text-[#bb9457]">Berlin League</span>and
            <span className="pl-2 pr-2 text-[#48A2B5]">
              Berliner Landespokal
            </span>
            , and we are determined to bring these titles home to our fans. With
            each passing season, we continue to grow stronger and more
            competitive, and we are excited to see what the future holds for our
            club.
          </p>

          <p className="mt-4 max-w-md text-justify text-xl">
            Possible
            <span className="pl-2 pr-2 text-[#A0DD9F]">throphies</span>
            to win in the next years:
          </p>

          <div className="flex ">
            <Image
              src="/league.png"
              width={200}
              height={200}
              alt="league"
              className="mt-12 mb-12 opacity-70 hover:opacity-100"
            />

            <Image
              src="/pokal.png"
              width={200}
              height={200}
              alt="league"
              className="mt-12 mb-12 opacity-70 hover:opacity-100"
            />
          </div>
        </article>
      </section>
    </div>
  );
};

export default Trophies;
