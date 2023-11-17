import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${({theme}) => theme.colors.red};

  width: 7.75rem;

  padding: 2rem 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    background: none;
    width: 100%;
    border: none;
  }

  nav {
    flex: 1;
    width: 100;
    heigth: 100%;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
    }
    li {
      a {
        width: fit-content;
        position: relative;
        padding-left: 1.875rem;
        padding-right: 1.875rem;

        display: flex;
        align-items: center;
        gap: 2rem;

        svg {
          fill: ${({theme}) => theme.colors.white};
          width: 4rem;
          heigt: 4rem;
          transition: fill 0.3s;
        }
        span {
          font-size: 1rem;
          font-weight:500;
          transition: color 0.3s;

        }
      }
    }
  }


`
