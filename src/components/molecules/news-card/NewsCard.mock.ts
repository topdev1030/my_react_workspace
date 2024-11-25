import type { NewsCardProps } from "./NewsCard.types";

export const newsCardMockData: NewsCardProps = {
  title:
    "Fox News 'hacker' turns out to be journalist whose lawyers say was doing his job",
  originUrl: "https://www.theregister.com/security/",
  originTitle: "The Register – Security",
  abstract:
    "Tim Burke was arrested on Thursday and charged with one count of conspiracy, six counts of accessing a protected computer without authorization, and seven counts of intercepting or disclosing wire, oral or electronic communications. Burke's lawyers say he followed a link to the feeds without being asked to input any credentials.",
  thumbnail: "https://regmedia.co.uk/2024/02/26/shutterstock_fox_news.jpg",
  feature: {
    glyph: "bug-outlined",
    text: "CVE-2023-21554 (CVSS 9.8 ex)",
  },
  published: 1696587660000,
};
