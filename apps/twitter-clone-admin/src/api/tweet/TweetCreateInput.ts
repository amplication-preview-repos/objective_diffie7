import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  author?: string | null;
  content?: string | null;
  cxsad?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
};
