/* eslint-disable max-len */
import { FC } from "react";
import cx from "clsx";

// types
import { GlyphIcon } from "./shared";

// styles
import { useStyles } from "./shared/styles";

const BookmarkOutlined: FC<GlyphIcon> = ({
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
      width={24}
      height={24}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path
        fill={color}
        fillRule="nonzero"
        d="M16 2.929H8a2.5 2.5 0 0 0-2.5 2.5v16l.007.084a.5.5 0 0 0 .723.36l5.777-2.998 5.762 2.997a.5.5 0 0 0 .731-.443v-16a2.5 2.5 0 0 0-2.5-2.5m0 1 .144.006A1.5 1.5 0 0 1 17.5 5.43v15.176l-5.261-2.737-.09-.036a.5.5 0 0 0-.371.036L6.5 20.606V5.429a1.5 1.5 0 0 1 1.5-1.5z"
      />
    </svg>
  );
};

export default BookmarkOutlined;
