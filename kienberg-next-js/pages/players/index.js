import Head from "next/head";
import styles from "../../styles/Players.module.css";
import Link from "next/link";
import connect from "../../mongoClient";

export async function getServerSideProps() {
  const db = await connect();
  const collection = db.collection("players");
  const data = await collection.find().toArray();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default function Players({ data }) {
  return (
    <>
      <Head>
        <title>Kienberg | Players</title>
        <meta name="keywords" content="players" />
      </Head>

      <div>
        <h1>All players</h1>

        {data.map((item) => (
          <div key={item._id}>
            <Link href={`/players/${item._id}`}>
              <p className={styles.single}>
                <span>{item.fname} </span>
                <span> {item.lname}</span>
                <span>{item.goals}</span>
                <img src={item.image} alt={`${item.fname} ${item.lname}`} />
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
