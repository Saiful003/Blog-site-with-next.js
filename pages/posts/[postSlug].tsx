import { useRouter } from "next/router";

const SingleBlogPost = () => {
  const {
    query: { postSlug },
  } = useRouter();

  return <h2> {postSlug} </h2>;
};
export default SingleBlogPost;
