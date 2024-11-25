import { TimelineProps as AntTimelineProps, TimelineItemProps } from "antd";

export interface TimelineProps extends AntTimelineProps {
  className?: string;
  items?: TimelineItemProps[];
}
