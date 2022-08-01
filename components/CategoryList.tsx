import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLowerCase } from "../hooks/useLowerCase";

interface IProps {
  slug: string;
}

function CategoryList({ slug }: IProps) {
  const {
    pathname,
    query: { categorySlug },
  } = useRouter();
  const lowerCaseSlug = useLowerCase(slug);

  const setListClass = ({
    forRecent,
    forOthers,
  }: {
    forRecent?: boolean;
    forOthers?: boolean;
  }) => {
    if (forRecent) {
      return classNames(
        "py-4 font-medium",
        {
          "border-b-4 border-b-emerald-500 text-emerald-400": pathname === "/",
        },
        { "text-gray-400": pathname !== "/" }
      );
    }
    if (forOthers) {
      return classNames(
        "py-4 font-medium",
        {
          "border-b-4 border-b-emerald-500 text-emerald-400":
            lowerCaseSlug === categorySlug,
        },
        { "text-gray-400": lowerCaseSlug !== categorySlug }
      );
    }
  };

  if (lowerCaseSlug === "recent") {
    return (
      <li className={setListClass({ forRecent: true })}>
        <Link href="/">{slug}</Link>
      </li>
    );
  }

  return (
    <li className={setListClass({ forOthers: true })}>
      <Link href={`/categories/${lowerCaseSlug}`}>{slug}</Link>
    </li>
  );
}

export default CategoryList;
