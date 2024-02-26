import styled from "styled-components";
import { Pad } from "../Pad";

interface AdditionalProps {
  readonly margin?: string;
  readonly padding?: string;
}
export const ContentPageStyle = styled(Pad).attrs<AdditionalProps>(() => ({
  padding: "1rem",
}))`
  background: white;
  border-radius: 0.4rem;
`;
