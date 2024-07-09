import { FaMoon } from "react-icons/fa6";
import styled from "styled-components";

export const Container = {
  Main: styled.div`
    background-color: ${({ theme }) => theme.colors.background.secondary};
    box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.boxShadow.primary};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: space-between;
    padding: 2.5rem 1.5rem;
    user-select: none;
    z-index: 1;

    @media screen {
      @media (min-width: 320px) {
        align-items: center;
        flex-direction: unset;
        gap: 1rem;
      }
      @media (min-width: 600px) {
        gap: 2rem;
        padding: 1.5rem 4.5rem;
      }
      @media (min-width: 1440px) {
        gap: 2vw;
        padding: 2vw 5.5vw;
      }
    }
  `,
  Theme: styled.div`
    align-items: center;
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    gap: 0.3rem;

    @media screen {
      @media (min-width: 600px) {
        padding: 0.5rem 1rem;

        &:hover {
          box-shadow: 0 0 0.5rem
            ${({ theme }) => theme.colors.boxShadow.primary};
        }
      }
      @media (min-width: 1440px) {
        gap: 0.3vw;
      }
    }
  `,
};

export const Icon = styled(FaMoon)`
  color: ${({ theme }) => theme.colors.text};
`;

export const Text = {
  Theme: styled.p`
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.875rem;
    font-weight: 600;

    @media screen {
      @media (min-width: 600px) {
        font-size: 1.125rem;
      }
      @media (min-width: 1440px) {
        font-size: 1.125vw;
      }
    }
  `,
  Title: styled.h1`
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: 800;

    @media screen {
      @media (min-width: 600px) {
        font-size: 1.5rem;
      }
      @media (min-width: 1440px) {
        font-size: 1.25vw;
      }
    }
  `,
};
