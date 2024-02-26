import styled from "styled-components";
import { Pad } from "../Pad";

interface AdditionalProps {
  readonly margin?: string;
  readonly padding?: string;
}
export const ContentArea = styled(Pad).attrs<AdditionalProps>(() => ({
  padding: "1rem 0",
  margin: "2rem 0",
}))`
  background: rgb(1, 95, 156);
`;
