import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { AdvicesDetails, IconsWrapper, IntroductionContainer, IntroductionWrapper } from "./styles";

import coffeeImage from '../../../../assets/coffee-image.svg'

export function Introduction () {
  return (
    <IntroductionContainer>
      <IntroductionWrapper>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
        <IconsWrapper>
          <div>
            <AdvicesDetails variant="yellow-dark"><ShoppingCart size={16} weight="fill" />Compra simples e segura</AdvicesDetails>
            <AdvicesDetails variant="yellow"><Timer size={16} weight="fill" />Entrega rápida e rastreada</AdvicesDetails>
          </div>
          <div>
            <AdvicesDetails variant="base-text"><Package size={16} weight="fill" />Embalagem mantém o café intacto</AdvicesDetails>
            <AdvicesDetails variant="purple"><Coffee size={16} weight="fill" />O café chega fresquinho até você</AdvicesDetails>
          </div>
        </IconsWrapper>
      </IntroductionWrapper>
      <img src={coffeeImage}  />
    </IntroductionContainer>
  )
}