import styled from "styled-components";

export const Container = {
  Borders: {
    Content: styled.div`
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      @media screen {
        @media (min-width: 1440px) {
          gap: 1vw;
        }
      }
    `,
    Main: styled.div`
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 2.5rem;

      @media screen {
        @media (max-width: 480px) {
          margin-top: unset;
        }
        @media (min-width: 1440px) {
          margin-top: 3vw;
        }
      }
    `,
  },
  Content: styled.div`
    align-items: center;
    display: flex;
    gap: 7rem;

    @media screen {
      @media (max-width: 1200px) {
        flex-direction: column;
        gap: 2rem;
      }
      @media (min-width: 1440px) {
        gap: 7vw;
      }
    }
  `,
  Details: {
    Inner: {
      Column: styled.div`
        display: flex;
        flex-direction: column;

        @media screen {
          @media (max-width: 480px) {
            gap: 0.75rem;
          }
        }
      `,
      Main: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8rem;

        @media screen {
          @media (max-width: 1400px) {
            gap: 2.5rem;
          }
          @media (max-width: 768px) {
            flex-direction: column;
          }
          @media (min-width: 1440px) {
            gap: 8vw;
          }
        }
      `,
    },
    Outer: styled.div`
      color: ${({ theme }) => theme.colors.text};
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 1.5rem;
      min-width: 0;

      @media screen {
        @media (max-width: 480px) {
          gap: 2.5rem;
        }
        @media (min-width: 1440px) {
          gap: 1.5vw;
        }
      }
    `,
  },
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

export const Flag = styled.img`
  align-self: flex-start;
  flex: 1;
  min-width: 0;
  max-width: 100%;

  &:hover {
    box-shadow: 0 0 0.75rem ${({ theme }) => theme.colors.boxShadow.secondary};
  }

  @media screen {
    @media (max-width: 480px) {
      max-width: 100%;
    }
  }
`;

export const Text = {
  Bolder: styled.p`
    font-weight: 600;

    @media screen {
      @media (min-width: 1440px) {
        font-size: 1.2vw;
      }
    }
  `,
  Normal: styled.span`
    font-weight: 300;

    @media screen {
      @media (min-width: 1440px) {
        font-size: 1.2vw;
      }
    }
  `,
  Title: styled.h1`
    font-weight: 800;

    @media screen {
      @media (min-width: 1440px) {
        font-size: 2.4vw;
      }
      @media (max-width: 480px) {
        font-size: 1.5rem;
      }
    }
  `,
};
