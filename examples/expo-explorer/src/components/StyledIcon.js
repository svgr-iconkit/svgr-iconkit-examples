import { Icon as SVGIcon } from "@svgr-iconkit/core/native";
import styled, { css } from "styled-components/native";

const StyledIcon = styled(SVGIcon)`
  ${({ size }) =>
    size &&
    css`
      width: ${size}px;
      height: ${size}px;
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export default SVGIcon;
