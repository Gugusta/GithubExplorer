import styled from "styled-components"

export const Container = styled.section`
  width: 100%;
  padding: 3rem 2.4rem;
  background: ${(props) => props.theme.colors.card};

  border-radius: 1.5rem;
  margin-top: 1.6rem;
  max-width: 73.3rem;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  display: flex;

  @media (min-width: 768px) {
    padding: 5.2rem 4.8rem;
  }

  @media (min-width: 900px) {
    padding: 4.8rem;
  }

  a {
    all: unset;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.textNorm};
`
export const Description = styled.p`
  display: block;
  font-size: 1.2rem;
  margin-top: 0.2rem;
  color: ${(props) => props.theme.colors.textNorm};
`
export const RepositoryListContainer = styled.ul`
  list-style-type: none;
`
export const RepositoryListItem = styled.li`
  width: 63rem;
  padding: 1rem 0;
  border-bottom: 1px dotted ${(props) => props.theme.colors.textNorm};
`
