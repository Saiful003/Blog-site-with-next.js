import type { NextApiRequest, NextApiResponse } from "next";

export interface Data {
  message: string;
  serverName: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res
    .status(200)
    .json({ message: "Yeah got the response", serverName: "Next.js server" });
}
