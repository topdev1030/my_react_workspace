import { FC } from "react";
import cx from "clsx";

// glyphs
import { glyphs } from "./glyphs";

// types
import { IconsProps } from "./Icons.types";

// styles
import { useStyles } from "./Icons.styles";

const Icons: FC<IconsProps> = ({ className = "", color, glyph, onClick }) => {
  const classes = useStyles();

  const Glyph = glyphs[glyph];
  if (Glyph) {
    return (
      <Glyph
        className={cx({
          [classes.root]: true,
          [className || ""]: className,
        })}
        color={color}
        onClick={onClick}
      />
    );
  }
  return null;
};

export { Icons };
