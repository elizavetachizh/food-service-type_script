import styled from "styled-components";

interface AdditionalProps {
  readonly padding?: any;
  readonly margin?: any;
}
export const Pad = styled.div<AdditionalProps>`
  padding: ${(props) => {
    return []
      .concat(props.padding)
      .map((paddingKey) => paddingKey)
      .join(" ");
  }};
  margin: ${(props) => {
    return []
      .concat(props.margin)
      .map((marginKey) => marginKey)
      .join(" ");
  }};
`;
