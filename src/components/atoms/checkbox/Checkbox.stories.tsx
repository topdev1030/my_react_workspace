import { useState } from "react";
import { Divider } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

import { Checkbox } from "./Checkbox";

const CheckboxGroup = Checkbox.Group;

export default {
  component: Checkbox,
  title: "atoms/Checkbox",
};

export const Basic = () => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return <Checkbox onChange={onChange}>Checkbox</Checkbox>;
};

const defaultCheckedList = ["Apple", "Orange"];
const plainOptions = ["Apple", "Pear", "Orange"];

export const Group = () => {
  const [checkedList, setCheckedList] = useState<string[]>(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: string[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </>
  );
};
