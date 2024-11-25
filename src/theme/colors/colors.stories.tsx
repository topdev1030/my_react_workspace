import { createUseStyles } from "react-jss";

// theme
import { Theme } from "@/theme";
import { colors, ColorName } from ".";

export default {
  title: "theme/Colors",
};

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: 0,
  },
  themeContainer: {
    display: "flex",
    flexDirection: "column",
  },
  colorPalette: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    overflow: "hidden",
  },
  cell: {
    width: "33.33%",
    margin: "0.7em 0",
    padding: "0 0.5em",
    boxSizing: "border-box",
  },
  content: {
    position: "relative",
    display: "block",
    marginBottom: "0.2em",
    height: "4em",
    boxShadow: `0 0 0 2px ${theme.colors.colorTextTertiary}`,
  },
  hexCode: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 14,
    fontWeight: 500,
    color: theme.colors.colorTextTertiary,
  },
  name: {
    fontSize: 14,
    textAlign: "center",
    color: theme.colors.colorText,
  },
}));

export const Default = () => {
  const styles = useStyles();

  return (
    <ul className={styles.root}>
      <div className={styles.themeContainer}>
        <div className={styles.colorPalette}>
          {Object.entries(colors).map(([key, value], idx) => (
            <li className={styles.cell} key={idx}>
              <div
                className={styles.content}
                style={{ backgroundColor: colors[key as ColorName] }}
              >
                <span className={styles.hexCode}>{value}</span>
              </div>
              <div className={styles.name}>{key}</div>
            </li>
          ))}
        </div>
      </div>
    </ul>
  );
};
