import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: "inline-block",
    fontFamily: "DM Sans",
  },
  inputClass: {
    "&.form-control": {
      height: 32,
      paddingLeft: 52,
      backgroundColor: theme.colors.colorPrimaryBg,
      border: `1px solid ${theme.colors.colorBorder}`,
      borderRadius: 6,
      color: theme.colors.colorText,
      fontSize: 14,
      transition: "all 0.2s",
      "&::placeholder": {
        color: theme.colors.colorTextPlaceholder,
      },
      "&:hover, &:focus": {
        borderColor: theme.colors.colorPrimaryHover,
        "& + .flag-dropdown": {
          borderColor: theme.colors.colorPrimaryHover,
        },
      },
    },
  },
  buttonClass: {
    "&.flag-dropdown": {
      backgroundColor: theme.colors.colorFillQuaternary,
      borderColor: theme.colors.colorBorder,
      borderWidth: "0 1px 0 0",
      borderRadius: "6px 0 0 6px",
      transition: "all 0.2s",
      "& > .selected-flag": {
        "&:hover": {
          backgroundColor: theme.colors.colorFillQuaternary,
        },
      },
      "&.open": {
        backgroundColor: theme.colors.colorFillQuaternary,
        "& > .selected-flag": {
          backgroundColor: theme.colors.colorFillQuaternary,
        },
      },
    },
  },
  dropdownClass: {
    "&.country-list": {
      background: theme.colors.colorBgElevated,
      border: `1px solid ${theme.colors.colorBorder}`,
      borderRadius: 8,
      color: theme.colors.colorText,
      fontSize: 14,
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "& > li.country:hover, & > li.country.highlight": {
        background: theme.colors.colorFillTertiary,
      },
    },
  },
}));

export { useStyles };
