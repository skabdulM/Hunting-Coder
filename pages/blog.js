import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log("use affect is running");
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      });
  }, []);

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

export default Blog;
