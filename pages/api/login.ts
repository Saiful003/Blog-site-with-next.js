import type { NextApiRequest, NextApiResponse } from "next";
import { IRes } from "./signin";

export default function getLoginTitle(
  req: NextApiRequest,
  res: NextApiResponse<IRes>
) {
  res.status(200).json({ title: "Please Login" });
}
