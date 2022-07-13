import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>{`
      .title{
        font-size:2em;
      }
      `}</style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="HuntingBlog by hunting Coder" />
        <meta name="keyword" content="HuntingBlog by hunting Coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <main className={styles.main}>
        <h2 className={styles.title}>Hunting Coder</h2>
        <p className={styles.description}>Blog by Hunting Coder</p>
        <div className={styles.imgWrap}>
          <Image
            className={styles.myImg}
            src="/homeimg.jpg"
            width={300}
            height={150}
          />
        </div>
        <h3 className="title">Popular Blogs</h3>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Blog 1 &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
          <div className={styles.card}>
            <h3>Blog 2 &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
          <div className={styles.card}>
            <h3>Blog 3 &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
          <div className={styles.card}>
            <h3>Blog 4 &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
          <div className={styles.card}>
            <h3>Blog 5 &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  );
}
