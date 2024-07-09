import styled from "styled-components";

export const Container = {
  Filtering: styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
    padding: 3rem 1.5rem 0;

    @media screen {
      @media (min-width: 768px) {
        align-items: center;
        flex-direction: unset;
        padding: 3rem 4.5rem 0;
      }
      @media (min-width: 1440px) {
        padding: 3vw 5.5vw 0;
      }
    }
  `,
  List: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 2rem 1.5rem;

    @media screen {
      @media (min-width: 375px) {
        padding: 3rem 4rem;
      }
      @media (min-width: 768px) {
        padding: 3rem 4.5rem;
      }
      @media (min-width: 1440px) {
        padding: 3vw 5.5vw;
      }
    }
  `,
  Main: styled.div`
    background-color: ${({ theme }) => theme.colors.background.primary};
    display: flex;
    flex-direction: column;
    flex: 1;
  `,
};
