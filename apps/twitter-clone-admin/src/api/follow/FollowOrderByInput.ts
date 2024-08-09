import { SortOrder } from "../../util/SortOrder";

export type FollowOrderByInput = {
  createdAt?: SortOrder;
  followee?: SortOrder;
  follower?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
