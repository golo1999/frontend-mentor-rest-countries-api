import { MdSearch } from "react-icons/md";
import { MdOutlineClear } from "react-icons/md";
import styled from "styled-components";

export const Container = {
  Main: styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.boxShadow.primary};
    display: flex;
    gap: 0.5rem;
    height: 3.45rem;
    padding: 1rem;
    width: 100%;

    @media screen {
      @media (min-width: 375px) {
        gap: 1rem;
        padding: 1rem 1.5rem;
      }
      @media (min-width: 768px) {
        width: 30rem;
      }
      @media (min-width: 1440px) {
        gap: 1vw;
        height: 3.45vw;
        padding: 1vw 1.5vw;
        width: 35vw;
      }
    }
  `,
};

interface EndIconProps {
  $isHidden: boolean;
}

export const Icon = {
  End: styled(MdOutlineClear)<EndIconProps>`
    color: ${({ theme }) => theme.colors.text};
    ${({ $isHidden }) => $isHidden && "visibility: hidden"};

    @media screen {
      @media (min-width: 1440px) {
        font-size: 1.375vw;
      }
    }
  `,
  Start: styled(MdSearch)`
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.25rem;

    @media screen {
      @media (min-width: 375px) {
        font-size: 1.375rem;
      }
      @media (min-width: 1440px) {
        font-size: 1.375vw;
      }
    }
  `,
};

export const Input = styled.input.attrs({ type: "text" })`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
  font-size: 0.75rem;
  font-weight: 500;
  height: 100%;

  @media screen {
    @media (min-width: 375px) {
      font-size: 0.8125rem;
    }
    @media (min-width: 1440px) {
      font-size: 1vw;
    }
  }
`;
