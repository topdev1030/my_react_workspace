// theme
import { colors } from "@/theme/colors";

// components
import { CVSSDial } from ".";

export default {
  component: CVSSDial,
  title: "molecules/CVSSDial",
};

export const Default = () => {
  return (
    <div style={{ margin: 20 }}>
      <CVSSDial cvss={9.8} epss={0} bgColor={colors.colorPrimaryBg} />
    </div>
  );
};
