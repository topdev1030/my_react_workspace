/* eslint-disable max-len */
import { FC } from "react";
import cx from "clsx";

// types
import { GlyphIcon } from "./shared";

// styles
import { useStyles } from "./shared/styles";

const LayoutOutlined: FC<GlyphIcon> = ({
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
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M1.821 6.429c0-1.125.912-2.036 2.036-2.036h1.714c1.125 0 2.036.911 2.036 2.036V17.57a2.036 2.036 0 0 1-2.036 2.036H3.857a2.036 2.036 0 0 1-2.036-2.036zm2.036-.536a.536.536 0 0 0-.536.536V17.57c0 .296.24.536.536.536h1.714c.296 0 .536-.24.536-.536V6.43a.536.536 0 0 0-.536-.536zm5.25.536c0-1.125.912-2.036 2.036-2.036h1.714c1.125 0 2.036.911 2.036 2.036V17.57a2.036 2.036 0 0 1-2.036 2.036h-1.714a2.036 2.036 0 0 1-2.036-2.036zm2.036-.536a.536.536 0 0 0-.536.536V17.57c0 .296.24.536.536.536h1.714c.296 0 .536-.24.536-.536V6.43a.536.536 0 0 0-.536-.536zm5.25.536c0-1.125.911-2.036 2.036-2.036h1.714c1.124 0 2.036.911 2.036 2.036V17.57a2.036 2.036 0 0 1-2.036 2.036h-1.714a2.036 2.036 0 0 1-2.036-2.036zm2.036-.536a.536.536 0 0 0-.536.536V17.57c0 .296.24.536.536.536h1.714c.296 0 .536-.24.536-.536V6.43a.536.536 0 0 0-.536-.536z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default LayoutOutlined;
