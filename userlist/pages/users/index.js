import Head from "next/head";
import styles from "../../styles/Users.module.css"

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
        <title>Users List | Users</title>
        <meta name="keywords" content="users" />
      </Head>

      <div>
        <h1>All users</h1>
        {users.map((user) => (
          <div key={user.id}>
            <a className={styles.single}>{user.name}</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
