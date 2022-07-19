import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.grid}>
          {blogs.map((blogitem) => {
            return (
              <div key={blogitem.slug}>
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <div className={styles.card}>
                    <h3>{blogitem.title} &rarr;</h3>
                    <p>{blogitem.description.substr(0, 100)}...</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};
export async function getServerSideProps() {
  let res = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await res.json();
  return { props: { allBlogs } };
}

export default Blog;
