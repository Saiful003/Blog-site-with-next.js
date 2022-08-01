import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { StaticImageData } from "next/image";

interface IProps {
  image: StaticImageData;
}

function Card({ image }: IProps) {
  return (
    <Link href="/">
      <div>
        <Image src={image} layout="responsive" alt="image" />
        <div>
          <p className="my-2 text-sm text-gray-400"> August 1,2022 </p>
          <h2 className="text-3xl font-medium mb-3">
            Dummy Title goes to here
          </h2>
          <p className="text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            facilis repellat quos eligendi ea dignissimos accusantium, eveniet
            dicta quaerat, dolorum atque velit iure laboriosam id. Possimus
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
