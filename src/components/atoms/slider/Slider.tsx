import ReactSlider from "react-slick";
import cx from "clsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// types
import { SliderProps } from "./Slider.types";

// styles
import { useStyles } from "./Slider.styles";

const Slider = ({ className, children, ...props }: SliderProps) => {
  const styles = useStyles();

  return (
    <ReactSlider
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      slidesToScroll={1}
      slidesToShow={3}
      {...props}
    >
      {children}
    </ReactSlider>
  );
};

export { Slider };
