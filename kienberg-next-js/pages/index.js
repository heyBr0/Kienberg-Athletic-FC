import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kienberg | Home</title>
        <meta name="keywords" content="users" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fuga
          soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloribus harum facere illum voluptatem nobis similique ab quia odit
          obcaecati vel culpa quis aspernatur, at omnis expedita adipisci eum
          est amet!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fuga
          soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloribus harum facere illum voluptatem nobis similique ab quia odit
          obcaecati vel culpa quis aspernatur, at omnis expedita adipisci eum
          est amet!
        </p>
        <Link href="/users" className={styles.btn}>
          See players listing
        </Link>
      </div>
    </>
  );
}
