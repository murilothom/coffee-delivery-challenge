import styled from "styled-components"
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;
`

export const NavButtonsWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  
  font-size: 0.875rem;
  line-height: 1.1375;
  font-weight: 400;
`

export const NavBaseLinks = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  border-radius: 6px;
  text-decoration: none;
`

export const AddressLink = styled(NavBaseLinks)`
  background: ${({theme}) => theme['purple-light']};
  color: ${({theme}) => theme['purple']};
  & span {
    color: ${({theme}) => theme['purple-dark']};
  }
  gap: 0.25rem;
`

export const CartLink = styled(NavBaseLinks)`
  background: ${({theme}) => theme['yellow-light']};
  color: ${({theme}) => theme['yellow-dark']};
  position: relative;

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: ${({theme}) => theme['white']};
    background: ${({theme}) => theme['yellow-dark']};
    height: 20px;
    width: 20px;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.3;

    top: -8px;
    right: -8px;
  }
`