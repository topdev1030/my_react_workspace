import { Breadcrumb as AntBreadcrumb } from "antd";
import { Link } from "react-router-dom";
import cx from "clsx";

// types
import { BreadcrumbProps } from "./Breadcrumb.types";

// styles
import { useStyles } from "./Breadcrumb.styles";

const Breadcrumb = ({
  className,
  linkRouter = false,
  items = [],
  ...props
}: BreadcrumbProps) => {
  const styles = useStyles();

  const getBreadCrumbItems = () => {
    if (linkRouter) {
      return items.map(({ href, title }) => ({
        key: href,
        title: href ? <Link to={href}>{title}</Link> : title,
      }));
    }
    return items;
  };

  const breadcrumbItems = getBreadCrumbItems();

  return (
    <AntBreadcrumb
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      items={breadcrumbItems}
      {...props}
    />
  );
};

export { Breadcrumb };
