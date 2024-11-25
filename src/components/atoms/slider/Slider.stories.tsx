import { Slider } from "./Slider";

// styles
import { useStyles } from "./Slider.styles";

export default {
  component: Slider,
  title: "atoms/Slider",
};

export const Default = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const styles = useStyles();

  return (
    <div className={styles.sbContainer}>
      <Slider {...settings}>
        {[...Array(9)].map((__, idx) => (
          <div key={idx}>
            <div className={styles.sbCard}>
              <h3>{idx + 1}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
