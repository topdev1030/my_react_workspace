/* eslint-disable max-len */
import { FC } from "react";
import cx from "clsx";

// types
import { GlyphIcon } from "./shared";

// styles
import { useStyles } from "./shared/styles";

const AtomOutlined: FC<GlyphIcon> = ({
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
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      onClick={onClick}
    >
      <g
        fill={color}
        fillRule="evenodd"
        clipPath="url(#bandage-sm_svg__a)"
        clipRule="evenodd"
      >
        <path d="M11.517 2.787a4.027 4.027 0 1 1 5.696 5.696l-8.73 8.73a4.027 4.027 0 0 1-5.696-5.696zm4.989.707a3.027 3.027 0 0 0-4.282 0l-1.517 1.518 4.282 4.281 1.517-1.517a3.027 3.027 0 0 0 0-4.282M14.28 10 10 5.72 5.719 10 10 14.281zM9.293 14.99 5.01 10.707l-1.517 1.517a3.028 3.028 0 0 0 4.282 4.282zM17.213 11.517a4.028 4.028 0 0 1-5.696 5.696.5.5 0 1 1 .707-.707 3.028 3.028 0 0 0 4.282-4.282.5.5 0 0 1 .707-.707m-8.73-8.023a.5.5 0 0 1-.707 0 3.027 3.027 0 1 0-4.282 4.282.5.5 0 1 1-.707.707 4.027 4.027 0 0 1 5.696-5.696.5.5 0 0 1 0 .707" />
      </g>
      <defs>
        <clipPath id="bandage-sm_svg__a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AtomOutlined;
