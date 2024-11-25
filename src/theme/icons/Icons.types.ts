// types
import { Glyphs } from "./glyphs";

export interface IconsProps {
  className?: string;
  color?: string;
  glyph: Glyphs["glyph"];
  onClick?: (...args: any[]) => any;
}
