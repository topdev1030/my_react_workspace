import { NewsCard } from ".";

// mock
import { newsCardMockData } from "./NewsCard.mock";

export default {
  component: NewsCard,
  title: "molecules/NewsCard",
};

export const Default = () => {
  return (
    <div style={{ margin: 20 }}>
      <NewsCard {...newsCardMockData} />
    </div>
  );
};

export const Active = () => {
  return (
    <div style={{ margin: 20 }}>
      <NewsCard {...newsCardMockData} selected />
    </div>
  );
};
