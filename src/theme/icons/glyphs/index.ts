import AnonymousOutlined from "./AnonymousOutlined";
import AtomOutlined from "./AtomOutlined";
import BookmarkOutlined from "./BookmarkOutlined";
import BugOutlined from "./BugOutlined";
import CheckOutlined from "./CheckOutlined";
import CloseOutlined from "./CloseOutlined";
import CopyOutlined from "./CopyOutlined";
import CrossedDaggerOutlined from "./CrossedDaggerOutlined";
import ExternalLinkOutlined from "./ExternalLinkOutlined";
import FootprintOutlined from "./FootprintOutlined";
import LayoutOutlined from "./LayoutOutlined";
import LessLikeOutlined from "./LessLikeOutlined";
import LineChartOutlined from "./LineChartOutlined";
import MalwareOutlined from "./MalwareOutlined";
import NVDOutlined from "./NVDOutlined";
import ScreenOutlined from "./ScreenOutlined";
import SearchOutlined from "./SearchOutlined";
import TagOutlined from "./TagOutlined";
import TabShapeFilled from "./TabShapeFilled";
import TargetOutlined from "./TargetOutlined";

const glyphs = {
  "anonymous-outlined": AnonymousOutlined,
  "atom-outlined": AtomOutlined,
  "bookmark-outlined": BookmarkOutlined,
  "bug-outlined": BugOutlined,
  "check-outlined": CheckOutlined,
  "close-outlined": CloseOutlined,
  "copy-outlined": CopyOutlined,
  "crossed-dagger-outlined": CrossedDaggerOutlined,
  "external-link-outlined": ExternalLinkOutlined,
  "footprint-outlined": FootprintOutlined,
  "layout-outlined": LayoutOutlined,
  "less-like-outlined": LessLikeOutlined,
  "line-chart-outlined": LineChartOutlined,
  "malware-outlined": MalwareOutlined,
  "nvd-outlined": NVDOutlined,
  "screen-outlined": ScreenOutlined,
  "search-outlined": SearchOutlined,
  "tag-outlined": TagOutlined,
  "tab-shape-filled": TabShapeFilled,
  "target-outlined": TargetOutlined,
};

export interface Glyphs {
  glyph: keyof typeof glyphs;
}

export { glyphs };
