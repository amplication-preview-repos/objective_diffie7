import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowWhereInput = {
  followee?: StringNullableFilter;
  follower?: StringNullableFilter;
  id?: StringFilter;
};
