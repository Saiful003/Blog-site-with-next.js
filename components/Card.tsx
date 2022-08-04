import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { StaticImageData } from "next/image";
import IconButton from "./IconButton";
import { AiFillAccountBook } from "react-icons/ai";
import { useTheme } from "../hooks/useTheme";
import classNames from "classnames";

interface IProps {
  image: StaticImageData;
  postSlug: string;
}

function Card({ image, postSlug }: IProps) {
  const { isLightTheme } = useTheme();
  return (
    <Link href={`/posts/${postSlug}`}>
      <a>
        <div className="aspect-video relative">
          <Image src={image} layout="fill" objectFit="cover" alt="image" />
        </div>
        <div>
          <p className="my-2 text-sm text-gray-400"> August 1,2022 </p>
          <h3
            className={classNames("text-2xl font-medium mb-3", {
              " text-neutral-200": !isLightTheme,
            })}
          >
            Dummy Title goes to here
          </h3>
          <p
            className={classNames(
              "text-md",
              { "text-gray-500": isLightTheme },
              { " text-neutral-500": !isLightTheme }
            )}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            facilis repellat quos eligendi ea dignissimos accusantium, eveniet
            dicta quaerat, dolorum atque velit iure laboriosam id. Possimus
          </p>
        </div>
      </a>
    </Link>
  );
}

export default Card;
