import styled from "styled-components";

type justifySchemaProps = {
  [key: string]: string;
};

const justifySchema: justifySchemaProps = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  spaceAround: "space-around",
};
export const InlineBundle = styled.div<{
  readonly gutter: string;
  readonly justify: string;
  readonly align: string;
}>`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.gutter};
  justify-content: ${(props) =>
    justifySchema[props.justify] ?? justifySchema["end"]};
  align-items: ${(props) =>
    justifySchema[props.align] ?? justifySchema["center"]};
`;
