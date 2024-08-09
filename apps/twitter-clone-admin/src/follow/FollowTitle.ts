import { Follow as TFollow } from "../api/follow/Follow";

export const FOLLOW_TITLE_FIELD = "followee";

export const FollowTitle = (record: TFollow): string => {
  return record.followee?.toString() || String(record.id);
};
