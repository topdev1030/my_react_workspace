/* eslint-disable max-len */
import { FC } from "react";
import cx from "clsx";

// types
import { GlyphIcon } from "./shared";

// styles
import { useStyles } from "./shared/styles";

const TabShapeFilled: FC<GlyphIcon> = ({
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
      width={28}
      height={52}
      viewBox="0 0 28 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M2.50049 10.4C4.00098 9.88 28 0 28 0V52C28 52 4.00098 42.12 2.50049 41.6C1 41.08 -0.000488102 39.52 0 38.48C0.00048846 37.44 0.00048846 14.56 0 13.52C-0.000488102 12.48 1 10.92 2.50049 10.4Z"
        fill={color}
      />
    </svg>
  );
};

export default TabShapeFilled;
