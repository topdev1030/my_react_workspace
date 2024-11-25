import { Settings } from "react-slick";

export interface SliderProps extends Settings {
  className?: string;
  infinite?: boolean;
  variableWidth?: boolean;
  autoplay?: boolean;
  slidesToScroll?: number;
  speed?: number;
  cssEase?: string;
  arrows?: boolean;
  draggable?: boolean;
  children?: React.ReactNode;
}
