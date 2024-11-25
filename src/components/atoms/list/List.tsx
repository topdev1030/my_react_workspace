import { List as AntList } from "antd";
import cx from "clsx";

// types
import { ListProps } from "./List.types";

// styles
import { useStyles } from "./List.styles";

const List = ({
  className,
  itemLayout = "horizontal",
  dataSource = [],
  renderItem,
  ...props
}: ListProps<any>) => {
  const styles = useStyles();

  return (
    <AntList
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      itemLayout={itemLayout}
      dataSource={dataSource}
      renderItem={renderItem}
      {...props}
    />
  );
};

const CompoundElements = Object.assign(List, {
  Item: AntList.Item,
});

export { CompoundElements as List };
