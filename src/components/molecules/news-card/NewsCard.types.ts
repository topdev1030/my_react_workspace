// theme
import { Glyphs } from "@/theme/icons";

export type NewsCardFeatureType = {
  glyph: Glyphs["glyph"];
  text: string;
};

export interface NewsCardProps {
  className?: string;
  title: string;
  originUrl: string;
  originTitle: string;
  abstract?: string;
  thumbnail?: string;
  feature?: NewsCardFeatureType;
  published: number;
  selected?: boolean;
  onBookmark?: () => void;
  onTag?: () => void;
  onLessLike?: () => void;
  onMark?: () => void;
  onHide?: () => void;
  onClick?: () => void;
}
