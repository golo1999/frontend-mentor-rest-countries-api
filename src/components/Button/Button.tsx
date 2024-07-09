import { ReactElement } from "react";
import styled from "styled-components";

import { AlignSelf } from "./Button.types";

const StyledButton = styled.button<StyleProps>`
  align-items: center;
  align-self: ${({ $alignSelf }) => $alignSelf};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  box-shadow: ${({ $boxShadow }) => $boxShadow};
  color: ${({ $color }) => $color};
  display: flex;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: 300;
  gap: ${({ $gap }) => $gap};
  padding: ${({ $padding }) => $padding};

  &:hover {
    background-color: ${({ $backgroundColorHover }) => $backgroundColorHover};
    box-shadow: ${({ $boxShadowHover }) => $boxShadowHover};
  }
`;

type StyleProps = {
  $alignSelf?: AlignSelf;
  $backgroundColor?: string;
  $backgroundColorHover?: string;
  $borderRadius?: string;
  $boxShadow?: string;
  $boxShadowHover?: string;
  $color?: string;
  $fontSize?: string;
  $gap?: string;
  $padding?: string;
};

type Props = StyleProps & {
  startIcon?: ReactElement;
  text: string;
  onClick: () => void;
};

export function Button({
  $alignSelf = "auto",
  $backgroundColor = "white",
  $backgroundColorHover,
  $borderRadius = "0.25rem",
  $boxShadow,
  $boxShadowHover,
  $color = "black",
  $fontSize,
  $gap,
  $padding,
  startIcon,
  text,
  onClick,
}: Props) {
  return (
    <StyledButton
      $alignSelf={$alignSelf}
      $backgroundColor={$backgroundColor}
      $backgroundColorHover={$backgroundColorHover}
      $borderRadius={$borderRadius}
      $boxShadow={$boxShadow}
      $boxShadowHover={$boxShadowHover}
      $color={$color}
      $fontSize={$fontSize}
      $gap={$gap}
      $padding={$padding}
      onClick={onClick}
    >
      {startIcon}
      {text}
    </StyledButton>
  );
}
