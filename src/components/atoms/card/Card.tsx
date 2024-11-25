import { Card as AntCard } from "antd";
import cx from "clsx";

// types
import { CardProps } from "./Card.types";

// styles
import { useStyles } from "./Card.styles";

const Card = ({ className, title, extra, ...props }: CardProps) => {
  const styles = useStyles();

  return (
    <AntCard
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      title={title}
      extra={extra}
      {...props}
    />
  );
};

export { Card };
