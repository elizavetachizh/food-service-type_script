import styled from "styled-components";
import { Pad } from "../Pad";
export const SearchBar = styled(Pad).attrs<{
  readonly as?: string;
  readonly padding?: string[] | string;
  readonly type: string
}>(() => ({
  as: "input",
  padding: ["0.5rem", "1rem"],
}))`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  border-radius: 0.3rem;
  border: none;
  color: white;
  background: rgb(1, 95, 156);
`;
