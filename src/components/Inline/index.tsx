import styled from "styled-components";
import { InlineBundle } from "../InlineBundle";

type stretchSchemaType = {
  [key: string]: string;
};

const stretchSchema: stretchSchemaType = {
  all: `> * { flex: 1 }`,
  start: `> :first-child { flex: 1 }`,
  end: `> :last-child { flex: 1 }`,
};
export const Inline = styled(InlineBundle)<{
  readonly stretch: string | number;
}>`
  flex-wrap: nowrap;
  ${({ stretch }) => {
    if (typeof stretch === "number") {
      return `> :nth-child(${stretch + 1}) { flex: 1 }`;
    }
    return stretchSchema[stretch] ?? "";
  }}
`;
