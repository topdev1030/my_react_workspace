import { useState } from "react";
import { createUseStyles } from "react-jss";

// theme
import { colors, ColorName } from "../colors";

// component
import { Icons, glyphs, Glyphs } from ".";

export default {
  component: Icons,
  title: "theme/Icons",
};

const useStyles = createUseStyles({
  colorRow: {
    display: "inline-block",
    width: 15,
    height: 15,
    borderRadius: "50%",
    border: `1px solid ${colors.colorBorder}`,
    cursor: "pointer",
  },
  colorPicker: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    lineHeight: "28px",
    marginBottom: 16,
    color: colors.colorText,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: 24,
  },
  cell: {
    display: "inline-flex",
    alignItems: "center",
    flexDirection: "column",
    padding: 16,
    borderRadius: 4,
    border: `1px solid ${colors.colorBorder}`,
    color: colors.colorText,
    fontSize: 16,
  },
  icon: {
    marginBottom: 16,
    fontSize: 32,
    textAlign: "center",
  },
});

const ColorRow = ({
  onClick,
  currentColor,
}: {
  onClick: (color: ColorName) => void;
  currentColor: ColorName;
}) => {
  const classes = useStyles();
  return (
    <>
      {Object.keys(colors).map((colorName, idx) => (
        <div
          key={idx}
          className={classes.colorRow}
          style={{
            backgroundColor: colors[colorName as ColorName],
            transform: colorName === currentColor ? "scale(1.4)" : "",
          }}
          onClick={() => onClick(colorName as ColorName)}
        />
      ))}
    </>
  );
};

export const Default = () => {
  const [fgColor, setFgColor] = useState<ColorName>("colorPrimary");
  const [bgColor, setBgColor] = useState<ColorName>("colorPrimaryBg");

  const classes = useStyles();

  return (
    <>
      <div className={classes.colorPicker}>
        Foreground Color:{" "}
        <ColorRow onClick={setFgColor} currentColor={fgColor} />
      </div>
      <div className={classes.colorPicker}>
        Background Color:{" "}
        <ColorRow onClick={setBgColor} currentColor={bgColor} />
      </div>
      <div className={classes.container}>
        {Object.keys(glyphs).map((iconName, idx) => (
          <div
            key={idx}
            className={classes.cell}
            style={{ backgroundColor: colors[bgColor] }}
          >
            <Icons
              className={classes.icon}
              glyph={iconName as Glyphs["glyph"]}
              color={colors[fgColor]}
            />
            {iconName}
          </div>
        ))}
      </div>
    </>
  );
};
