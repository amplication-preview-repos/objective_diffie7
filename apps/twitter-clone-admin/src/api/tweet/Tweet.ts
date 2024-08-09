import { Like } from "../like/Like";

export type Tweet = {
  author: string | null;
  content: string | null;
  createdAt: Date;
  cxsad: string | null;
  id: string;
  likes?: Array<Like>;
  updatedAt: Date;
};
