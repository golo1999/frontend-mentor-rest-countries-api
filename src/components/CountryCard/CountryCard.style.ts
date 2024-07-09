import styled from "styled-components";

export const Container = {
  Details: {
    Inner: styled.div`
      display: flex;
      flex-direction: column;
      font-size: 0.875rem;
      font-weight: 600;
      gap: 0.25rem;
    `,
    Outer: styled.div`
      color: ${({ theme }) => theme.colors.text};
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 1rem;
      padding: 1rem;

      @media screen {
        @media (min-width: 375px) {
          padding: 1.5rem;
        }
        @media (min-width: 1440px) {
          gap: 1vw;
          padding: 1.5vw;
        }
      }
    `,
  },
  Main: styled.li`
    background-color: ${({ theme }) => theme.colors.background.secondary};
    border-radius: 0.25rem;
    box-shadow: 0 0 0.1875rem ${({ theme }) => theme.colors.boxShadow.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style-type: none;
    user-select: none;

    @media screen {
      @media (min-width: 480px) {
        &:hover {
          box-shadow: 0 0 0.75rem
            ${({ theme }) => theme.colors.boxShadow.secondary};
        }
      }
      @media (min-width: 1440px) {
        border-radius: 0.25vw;
      }
    }
  `,
};

export const Flag = styled.img`
  align-items: center;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  box-shadow: 0 0 0.125rem ${({ theme }) => theme.colors.boxShadow.primary};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  height: 10rem;
  justify-content: center;
  object-fit: cover;
  width: 100%;

  @media screen {
    @media (min-width: 1440px) {
      border-radius: 0.25vw;
      height: 12.5vw;
    }
  }
`;

export const Text = {
  Normal: styled.span`
    font-weight: 300;
  `,
  Title: styled.h2`
    font-size: 1.125rem;
    font-weight: 800;

    @media screen {
      @media (min-width: 1440px) {
        font-size: 1.2vw;
      }
    }
  `,
  Wrapper: styled.p`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 0.875rem;

    @media screen {
      @media (min-width: 1440px) {
        font-size: 0.875vw;
      }
    }
  `,
};
