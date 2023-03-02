
import Head from "next/head";
import styles from "../../styles/Players.module.css"
import Link from "next/link"

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const Ninjas = ({ users }) => {
  return (
    <>
      <Head>
        <title>Kienberg | Players</title>
        <meta name="keywords" content="users" />
      </Head>

      <div>
        <h1>All players</h1>
        {users.map((user) => (
          <Link href={"/players/" + user.id} key={user.id}>
            <p className={styles.single}>{user.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;