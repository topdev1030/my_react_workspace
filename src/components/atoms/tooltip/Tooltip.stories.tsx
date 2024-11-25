import { Tooltip } from "./Tooltip";
import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

export default {
  component: Tooltip,
  title: "atoms/Tooltip",
};

const useStyles = createUseStyles((theme: Theme) => ({
  text: {
    color: theme.colors.colorText,
  },
}));

export const Default = () => {
  const styles = useStyles();

  return (
    <Tooltip title="prompt text">
      <span className={styles.text}>Tooltip will show on mouse enter.</span>
    </Tooltip>
  );
};
