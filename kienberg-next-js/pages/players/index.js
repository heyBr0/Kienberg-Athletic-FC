/* import styles from "../../styles/Players.module.css"; */
import Head from "next/head";
import Link from "next/link";
import connect from "../../mongoClient";

export async function getServerSideProps() {
  const db = await connect();
  const collection = db.collection("goalkeepers");
  const data = await collection.find().toArray();
  const collection2 = db.collection("defenders");
  const data2 = await collection2.find().toArray();
  const collection3 = db.collection("midfielders");
  const data3 = await collection3.find().toArray();
  const collection4 = db.collection("forwards");
  const data4 = await collection4.find().toArray();
  const collection5 = db.collection("u19");
  const data5 = await collection5.find().toArray();
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      data2: JSON.parse(JSON.stringify(data2)),
      data3: JSON.parse(JSON.stringify(data3)),
      data4: JSON.parse(JSON.stringify(data4)),
      data5: JSON.parse(JSON.stringify(data5)),
    },
  };
}

export default function Players({ data, data2, data3, data4, data5 }) {
  return (
    <div>
      <Head>
        <title>Kienberg | Players</title>
        <meta name="keywords" content="players" />
      </Head>

      <h2 className="ml-2 mt-2 mb-2 pt-2 pb-2 text-2xl">Goalkeepers</h2>
      <div className="ml-2  mt-2 mb-2 flex  pt-2 pb-2 sm:flex-row tallscreen:flex-col">
        {data.map((item) => (
          <div key={item._id}>
            <Link href={`/players/${item._id}`}>
              <div
                className="m-2 flex border-l-8 p-1 hover:border-l-[#A0DD9F]"
                /*    className={styles.single} */
              >
                {item.role === "goalkeeper" && (
                  <>
                    <img
                      src={item.image}
                      alt={`${item.fname} ${item.lname}`}
                      className="w-3/5"
                    />

                    <section>
                      <span>{item.fname} </span>
                      <span> {item.lname}</span>
                      <p>
                        Apps: <span> {item.apps}</span>
                      </p>
                      <p>
                        Clean sheets: <span> {item.cleanSheet}</span>
                      </p>
                    </section>
                  </>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* //////////////////////////////////// */}

      <h2 className="mt-2 mb-2 pt-2 pb-2 text-2xl">Defenders</h2>
      <div className="ml-2  mt-2 mb-2 flex  pt-2 pb-2 sm:flex-row tallscreen:flex-col">
        {data2.map((item) => (
          <div key={item._id}>
            <Link href={`/players/${item._id}`}>
              <div className="m-2 flex border-l-8 p-1 hover:border-l-[#7F5A83]">
                {item.role === "defender" && (
                  <>
                    <img
                      src={item.image}
                      alt={`${item.fname} ${item.lname}`}
                      className="w-3/5"
                    />

                    <section>
                      <span>{item.fname} </span>
                      <span> {item.lname}</span>
                      <p>
                        Apps: <span> {item.apps}</span>
                      </p>
                      <p>
                        Assists: <span> {item.assists}</span>
                      </p>
                    </section>
                  </>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* //////////////////////////////////// */}

      <h2 className="mt-2 mb-2 pt-2 pb-2 text-2xl">Midfielders</h2>
      <div className="ml-2  mt-2 mb-2 flex  pt-2 pb-2 sm:flex-row tallscreen:flex-col">
        {data3.map((item) => (
          <div key={item._id}>
            <Link href={`/players/${item._id}`}>
              <div className="m-2 flex border-l-8 p-1 hover:border-l-[#bb9457]">
                {item.role === "midfielder" && (
                  <>
                    <img
                      src={item.image}
                      alt={`${item.fname} ${item.lname}`}
                      className="w-3/5"
                    />

                    <section>
                      <span>{item.fname} </span>
                      <span> {item.lname}</span>
                      <p>
                        Apps: <span> {item.apps}</span>
                      </p>
                      <p>
                        Assists: <span> {item.assists}</span>
                      </p>
                    </section>
                  </>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* //////////////////////////////////// */}

      <h2 className="mt-2 mb-2 pt-2 pb-2 text-2xl">Forwards</h2>
      <div className="ml-2  mt-2 mb-2 flex  pt-2 pb-2 sm:flex-row tallscreen:flex-col">
        {data4.map((item) => (
          <div key={item._id}>
            <Link href={`/players/${item._id}`}>
              <div className="m-2 flex border-l-8 p-1 hover:border-l-[#48A2B5]">
                {item.role === "forward" && (
                  <>
                    <img
                      src={item.image}
                      alt={`${item.fname} ${item.lname}`}
                      className="w-3/5"
                    />

                    <section>
                      <span>{item.fname} </span>
                      <span> {item.lname}</span>
                      <p>
                        Apps: <span> {item.apps}</span>
                      </p>
                      <p>
                        Goals: <span> {item.goals}</span>
                      </p>
                    </section>
                  </>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>

      <hr className="mx-auto w-1/2 bg-black dark:bg-white mt-12 mb-12" />
                     {/* //////////////////////////////////// */}

      <h2 className="mt-2 mb-2 pt-2 pb-2 text-2xl">U-19 Youth team</h2>
      <div className="ml-2  mt-2 mb-2 flex  pt-2 pb-2 sm:flex-row tallscreen:flex-col">
        {data5.map((item) => (
          <div key={item._id}>
            <Link href={`/players/${item._id}`}>
              <div className="m-2 flex border-l-8 p-1 hover:border-l-[#dabfff]">
                {item.role === "U-19" && (
                  <>
                    <img
                      src={item.image}
                      alt={`${item.fname} ${item.lname}`}
                      className="w-3/5"
                    />

                    <section>
                      <span>{item.fname} </span>
                      <span> {item.lname}</span>
                      <p>
                        Apps: <span> {item.apps}</span>
                      </p>
                      <p>
                        Goals: <span> {item.goals}</span>
                      </p>
                    </section>
                  </>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}
