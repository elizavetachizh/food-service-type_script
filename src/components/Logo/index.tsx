import styled from "styled-components";

interface LogoProps {
  readonly inverse?: string;
  readonly size?: string;
  readonly square?: string;
}
export const Logo = styled.div<LogoProps>`
  background: ${(props) => props.inverse ?? "white"};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  ${(props) => !props.square && "border-radius:50%"}
`;
