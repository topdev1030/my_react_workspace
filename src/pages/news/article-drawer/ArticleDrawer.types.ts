// types
import type { FeedlyArticle } from "@/types";
import type { DrawerProps } from "@/components";

export interface ArticleDrawerProps {
  article: FeedlyArticle;
  open?: boolean;
  onClose?: DrawerProps["onClose"];
}
