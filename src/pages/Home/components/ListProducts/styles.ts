import styled from "styled-components";

export const ListProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
  margin-top: 5.75rem;

  h3 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    padding-top: 2rem;
  }

  h4 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.25rem;
    line-height: 1.3;
    margin-top: 1rem;
  }

  h4 + span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
    margin-top: .5rem;
  }
`

export const ListProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
`

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  background: ${props => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;

  img {
    display: block;
    margin-top: -2.625rem;
  }
`

export const ProductTags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-top: 0.75rem;

  span {
    font-size: 0.625rem;
    line-height: 1.3;
    font-weight: 700;
    color: ${props => props.theme["yellow-dark"]};
    background: ${props => props.theme["yellow-light"]};
    padding: .25rem .5rem;
    border-radius: 100px;
  }
`

export const OrderCoffee = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4375rem;
  margin-top: 2rem;

  strong {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${props => props.theme["base-text"]};

    span {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.3;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;

    & > button {
      background: ${props => props.theme["purple-dark"]};
      padding: .5rem;
      border-radius: 6px;
      border: 0;
      line-height: 0;
      height: 2.375rem;

      svg {
        color: ${props => props.theme["base-card"]};
      }
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .25rem;
      background: ${props => props.theme["base-button"]};
      border-radius: 6px;
      height: 2.375rem;

      span {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
        color: ${props => props.theme["base-title"]};
      }

      button {
        line-height: 0;
        border: 0;
        background: transparent;
        cursor: pointer;

        svg {
          color: ${props => props.theme.purple};
        }
      }
    }
  }
`