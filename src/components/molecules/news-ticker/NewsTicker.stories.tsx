import { NewsTicker } from ".";
import { newsTickerMockData } from "./NewsTicker.mock";

export default {
  component: NewsTicker,
  title: "molecules/NewsTicker",
};

export const Default = () => {
  return <NewsTicker newsData={newsTickerMockData} />;
};
