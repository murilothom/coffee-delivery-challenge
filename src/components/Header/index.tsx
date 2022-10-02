import { CartLink, HeaderContainer, NavButtonsWrapper, AddressLink } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'

export function Header () {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo Coffee Delivery" />
      <NavButtonsWrapper>
        <AddressLink to='/checkout'>
          <MapPin size={22} weight="fill" />
          <span>Santa Maria, RS</span>
        </AddressLink>
        <CartLink to='/'>
          <ShoppingCart size={22} weight="fill" />
          <span>33</span>
        </CartLink>
      </NavButtonsWrapper>
    </HeaderContainer>
  )
}