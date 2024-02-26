import styled from "styled-components";
export const Center = styled.div<{ maxWidth?: string; centerText?: string }>`
  box-sizing: content-box;
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-inline-size: ${(props) => props.maxWidth};
  text-align: ${(props) => (props.centerText ? props.centerText : "center")};
  //${(props) => props.centerText && `text-align:center`}
`;
