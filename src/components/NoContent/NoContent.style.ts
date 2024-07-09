import styled from "styled-components";

export const Container = {
  Main: styled.div`
    background-color: ${({ theme }) => theme.colors.background.primary};
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 4.5rem;
    padding: 4.5rem;

    @media screen {
      @media (max-width: 480px) {
        padding: 2.25rem 1.75rem;
      }
      @media (min-width: 1440px) {
        gap: 5.5vw;
        padding: 5.5vw;
      }
    }
  `,
};

export const Text = {
  NoData: styled.p`
    color: ${({ theme }) => theme.colors.text};

    @media screen {
      @media (min-width: 1440px) {
        font-size: 1.25vw;
      }
    }
  `,
};
