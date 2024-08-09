import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  author?: string | null;
  content?: string | null;
  cxsad?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
};
