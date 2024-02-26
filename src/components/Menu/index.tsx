import styled from "styled-components";
import { Inline } from "../Inline";
import { Pad } from "../Pad";

interface MenuProps {
  readonly padding?: string[] | string;
  readonly gutter?: string;
  readonly justify?: string;
  readonly stretch?: string | number;
  readonly align?: string | number;
}
export const Menu = styled(Inline).attrs<MenuProps>(() => ({
  as: Pad,
  padding: ["0.5rem", "1rem"],
  gutter: "1rem",
  justify: "start",
}))`
  background: rgb(1, 95, 156);
  color: white;
  color-scheme: dark;
  border-block-end: 1px solid rgb(229, 229, 229);
`;
