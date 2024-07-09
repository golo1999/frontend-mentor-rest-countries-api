import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media screen {
    @media (min-width: 600px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    @media (min-width: 1440px) {
      gap: 5vw;
    }
  }
`;
