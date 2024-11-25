/* eslint-disable max-len */
import { FC } from "react";
import cx from "clsx";

// types
import { GlyphIcon } from "./shared";

// styles
import { useStyles } from "./shared/styles";

const ExternalLinkOutlined: FC<GlyphIcon> = ({
  className,
  color = "currentColor",
  onClick,
}) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || ""]: className,
      })}
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 512 512"
      onClick={onClick}
    >
      <polygon
        fill={color}
        points="400 464 48 464 48 104 240 104 240 72 16 72 16 496 432 496 432 272 400 272 400 464"
      />
      <polygon
        fill={color}
        points="304 16 304 48 441.373 48 188.687 300.687 211.313 323.313 464 70.627 464 208 496 208 496 16 304 16"
      />
    </svg>
  );
};

export default ExternalLinkOutlined;
