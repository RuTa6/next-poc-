import { useRouter } from "next/router";

const post = () => {
  const router = useRouter();
  const { post } = router.query;
  return (
    <div>
      <h1>{post}</h1>
    </div>
  );
};
export default post;
