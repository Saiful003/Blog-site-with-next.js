import { useRouter } from "next/router";
import CategoriesNav from "../../components/CategoriesNav";

const SingleCategoryBlogPost = () => {
  const {
    query: { categorySlug },
  } = useRouter();
  return (
    <>
      <CategoriesNav />
      <h2> {categorySlug} </h2>
    </>
  );
};

export default SingleCategoryBlogPost;
