import { Typography as AntTypography } from "antd";

// types
import { TypographyProps } from "./Typography.types";

const Typography = ({ className, ...props }: TypographyProps) => {
  return <AntTypography className={className} {...props} />;
};

const CompoundElements = Object.assign(Typography, {
  Text: AntTypography.Text,
  Link: AntTypography.Link,
  Title: AntTypography.Title,
  Paragraph: AntTypography.Paragraph,
});

export { CompoundElements as Typography };
