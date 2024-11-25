// theme
import { colors } from "@/theme/colors";

// components
import { SeverityDial } from ".";

export default {
  component: SeverityDial,
  title: "molecules/SeverityDial",
};

export const Default = () => {
  return (
    <div style={{ margin: 20 }}>
      <SeverityDial severity="HIGH" bgColor={colors.colorPrimaryBg} />
    </div>
  );
};
