import { useRouter } from "next/router";

const SingleCategoryBlogPost = () => {
  const {
    query: { categorySlug },
  } = useRouter();
  return <h2> {categorySlug} </h2>;
};

export default SingleCategoryBlogPost;
