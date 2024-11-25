// types
import type { FeedlyArticle } from "@/types";

export interface ArticlesTabProps {
  onViewArticle?: (article: FeedlyArticle) => void;
}

export enum NEWS_VIEW_MODE {
  CARD = "card",
  TABLE = "table",
}

export interface ArticleViewProps {
  className?: string;
  newsData?: FeedlyArticle[];
  onViewArticle?: (article: FeedlyArticle) => void;
}
