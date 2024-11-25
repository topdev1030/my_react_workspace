import { useState } from "react";

// components
import { InputPhone } from "./InputPhone";

export default {
  component: InputPhone,
  title: "atoms/InputPhone",
};

export const Default = () => {
  const [value, setValue] = useState<string>("");

  return (
    <InputPhone
      value={value}
      onChange={setValue}
      placeholder="input phone number"
    />
  );
};
