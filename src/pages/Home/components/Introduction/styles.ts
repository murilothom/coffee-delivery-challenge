import styled from "styled-components";

export const IntroductionContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  background: url("../../../../assets/background-title.png");
  margin-top: 5.875rem;
`

export const IntroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${props => props.theme["base-title"]};
  }

  span {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${props => props.theme["base-subtitle"]};
    margin-top: 1rem;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 4.125rem;
  gap: 2.5rem;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1.25rem;
  }
`

interface IAdvicesDetailsProps {
  variant: "yellow-dark" | "base-text" | "yellow" | "purple"
}

export const AdvicesDetails = styled.strong<IAdvicesDetailsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 400;

  svg {
    background: ${props => props.theme[props.variant]};
    padding: .5rem;
    border-radius: 50%;
    box-sizing: initial;
    color: ${props => props.theme.background};
  }
`