import styled from "styled-components"

export const ControlButton = styled.a`
  background: #0079ff;
  border: none;
  height: 100%;
  border-radius: 1rem;
  line-height: 2.1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  width: 8.4rem;
  transition: all 0.3s ease-out;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(1.05);
    box-shadow: 0px 0px 15px -3px #0079ff;
  }

  @media (min-width: 768px) {
    width: 10.6rem;
    font-size: 1.7rem;
  }
`

export const PaginationContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  padding-top: 1rem;
`
export const PageList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const PageItem = styled.li`
  display: block;
  align-items: center;
  border: none;
  background: none;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.25rem;
  color: ${(props) => props.theme.colors.themeBtn};
`
