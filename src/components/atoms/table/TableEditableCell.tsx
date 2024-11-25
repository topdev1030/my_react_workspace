import { Form } from "antd";
import { UploadOutlined } from "@ant-design/icons";

// components
import { Button, Input, InputNumber, Select, Upload } from "..";

// types
import { EditableCellProps } from "./Table.types";

// styles
import { useStyles } from "./Table.styles";

const EditableCell = <RecordType,>({
  editing,
  editInputProps,
  dataIndex,
  title,
  children,
  ...restProps
}: EditableCellProps<RecordType>) => {
  const styles = useStyles();

  const InputNode = ({ type, placeholder, options, suffix, ...props }) => {
    switch (type) {
      case "text":
      default:
        return <Input {...props} variant={type} placeholder={placeholder} />;
      case "number":
        return (
          <InputNumber {...props} placeholder={placeholder} suffix={suffix} />
        );
      case "select":
        return (
          <Select {...props} options={options} placeholder={placeholder} />
        );
      case "upload":
        return (
          <Upload {...props}>
            {props.children || (
              <Button icon={<UploadOutlined />}>Upload</Button>
            )}
          </Upload>
        );
    }
  };

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          className={styles.editFormItem}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          <InputNode {...editInputProps} />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export { EditableCell };
