import { Dropdown as AntDropdown } from "antd";
import cx from "clsx";

// types
import { DropdownProps } from "./Dropdown.types";

// styles
import { useStyles } from "./Dropdown.styles";

const Dropdown = ({
  className,
  menu,
  trigger,
  dropdownRender,
  ...props
}: DropdownProps) => {
  const styles = useStyles();

  return (
    <AntDropdown
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      overlayClassName={styles.overlay}
      menu={menu}
      trigger={trigger}
      dropdownRender={dropdownRender}
      {...props}
    />
  );
};

export { Dropdown };
