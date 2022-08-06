import type { NextApiRequest, NextApiResponse } from "next";
import { IRes } from "../../types";

export default function getAllProducts(
  req: NextApiRequest,
  res: NextApiResponse<IRes[]>
) {
  res.status(200).json([
    {
      message: "This is a message",
      data: "This response will contain some dummy data",
      servername: " This is built in next.js server ",
    },
  ]);
}
