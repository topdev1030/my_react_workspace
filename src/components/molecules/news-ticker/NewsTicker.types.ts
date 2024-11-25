export type NewsTickerItemType = {
  id: string;
  title: string;
  link?: string;
  summary?: string;
  meta?: string;
  onClick?: () => void;
};

export type SliderDataType = NewsTickerItemType & {
  isCategory?: boolean;
};

export type NewsTickerGroupType = {
  name: string;
  items: NewsTickerItemType[];
};

export interface NewsTickerProps {
  className?: string;
  newsData: NewsTickerGroupType[];
}
