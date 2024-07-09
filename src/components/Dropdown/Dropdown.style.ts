import styled from "styled-components";

export const Container = {
  Main: styled.div`
    height: 100%;
    position: relative;
    user-select: none;
    width: 100%;

    @media screen {
      @media (min-width: 375px) {
        width: 12.5rem;
      }
      @media (min-width: 1440px) {
        width: 14vw;
      }
    }
  `,
  Top: styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.boxShadow.primary};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    font-size: 0.875rem;
    gap: 0.5rem;
    height: 100%;
    justify-content: space-between;
    padding: 1rem;

    @media screen {
      @media (min-width: 375px) {
        gap: 1rem;
        padding: 1rem 1.5rem;
      }
      @media (min-width: 1440px) {
        font-size: 1vw;
        gap: 1vw;
        padding: 1vw 1.5vw;
      }
    }
  `,
};

export const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 0.25rem;
  box-shadow: 0 0 0.1875rem ${({ theme }) => theme.colors.boxShadow.primary};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  gap: 0.5rem;
  list-style-type: none;
  margin-top: 0.25rem;
  padding: 1rem 1.5rem;
  position: absolute;
  width: 100%;
  z-index: 9999;

  @media screen {
    @media (min-width: 1440px) {
      font-size: 1vw;
      gap: 1vw;
      margin-top: 0.25vw;
      padding: 1vw 1.5vw;
    }
  }
`;

export const ListItem = styled.li``;

export const Text = {
  SelectedItem: styled.p`
    flex: 1;
  `,
};
