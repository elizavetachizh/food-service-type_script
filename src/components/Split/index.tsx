import styled from "styled-components";
import { fractions } from "../../const/style";

export const Split = styled.div<{
  align?: string;
  gatter?: string;
  fraction: string;
}>`
    display: grid;
    align-items: ${(props) => props.align ?? "center"};
    gap${(props) => props.gatter ?? "1rem"};
    grid-template-columns: ${({ fraction }) => fractions[fraction] ?? fractions["1/2"]};
`;
