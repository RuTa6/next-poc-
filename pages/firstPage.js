import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
export async function getStaticProps() {
  let allPostsData;
  const res = await fetch("https://gorest.co.in/public/v1/posts", {
    method: "GET",
    redirect: "follow",
  })
    .then((response) => response.text())
    .then((result) => {
      const res = JSON.parse(result);
      allPostsData = res.data;
      return allPostsData;
    })
    .catch((error) => console.log("error", error));

  return {
    props: {
      allPostsData,
    },
  };
}
const firstPage = ({ allPostsData }) => {
  const allPosts = allPostsData;
  return (
    <div>
      <Head>
        <title>1st page</title>
      </Head>{" "}
      <img height={450} width={450} alt="hello" src="/images/img.jpeg" />
      <p> Feel the difference between two images by resizing the page</p>
      <Image height={450} width={450} alt="hello" src="/images/img.jpeg" />
      <Link href="/">
        <a>
          <h1>Go To Index Page</h1>
        </a>
      </Link>
      <section>
        <h2>User Table</h2>
        <div>
          <table>
            <tr>
              <th>id</th>
              <th>user id</th>
              <th>title</th>
              <th>dynamic page</th>
            </tr>

            {allPosts.map(({ id, user_id, title }) => (
              <tr>
                <td>{id}</td>
                <td>{user_id}</td>
                <td>{title}</td>
                <td>
                  <Link href={`/posts/${title}`}>
                    <a>user body</a>
                  </Link>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>
    </div>
  );
};
export default firstPage;
