// components
import { Timeline } from "./Timeline";

export default {
  component: Timeline,
  title: "atoms/Timeline",
};

export const Default = () => (
  <Timeline
    items={[
      {
        children: "Exploitation in the Wild",
      },
      {
        children: "Detection in Vulnerability Scanners",
      },
      {
        children: "CVE Assignment",
      },
      {
        children: "First Article",
      },
    ]}
  />
);
