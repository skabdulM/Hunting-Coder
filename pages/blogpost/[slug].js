import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/BlogPost.module.css";

const slug = (props) => {
  const [blog, setBlog] = useState(props.blog);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <p>{blog && blog.description}</p>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  // console.log(context.query.slug);
  // const router = useRouter();
  const { slug } = context.query;
 
  let res = await  fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
  let blog = await res.json();
  return { props: { blog } };
}
export default slug;
