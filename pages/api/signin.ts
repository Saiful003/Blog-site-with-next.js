import type { NextApiRequest, NextApiResponse } from "next";

export interface IRes {
  title: string;
}

export default function getSignInTitle(
  req: NextApiRequest,
  res: NextApiResponse<IRes>
) {
  res.status(200).json({ title: "Please Sign In" });
}
