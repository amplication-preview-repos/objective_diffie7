import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  cxsad?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
