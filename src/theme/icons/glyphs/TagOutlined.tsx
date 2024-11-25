/* eslint-disable max-len */
import { FC } from "react";
import cx from "clsx";

// types
import { GlyphIcon } from "./shared";

// styles
import { useStyles } from "./shared/styles";

const TagOutlined: FC<GlyphIcon> = ({
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
      <g fill={color} fillRule="nonzero">
        <path d="M11.48 2.78a.5.5 0 0 1 .85-.08l.047.08 2.797 5.687 6.256.918a.5.5 0 0 1 .333.788l-.056.065-2.47 2.413a.5.5 0 0 1-.757-.646l.059-.069 1.746-1.709-5.516-.808a.5.5 0 0 1-.324-.191l-.052-.083-2.465-5.012-2.464 5.012a.5.5 0 0 1-.282.25l-.094.024-5.517.808 3.993 3.904a.5.5 0 0 1 .15.345l-.007.097-.942 5.511 4.93-2.602a.5.5 0 0 1 .627.133l.049.076a.5.5 0 0 1-.133.626l-.076.05-5.827 3.075a.5.5 0 0 1-.734-.446l.008-.08 1.068-6.253-4.527-4.425a.5.5 0 0 1 .194-.833l.083-.02 6.255-.918z" />
        <path d="M17 13.5a.5.5 0 0 1 .492.41l.008.09v6a.5.5 0 0 1-.992.09L16.5 20v-6a.5.5 0 0 1 .5-.5" />
        <path d="M20 16.5a.5.5 0 0 1 .09.992L20 17.5h-6a.5.5 0 0 1-.09-.992L14 16.5z" />
      </g>
    </svg>
  );
};

export default TagOutlined;
