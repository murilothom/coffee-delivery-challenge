import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { coffees } from "../../coffees";
import { ListProductGrid, ListProductsContainer, OrderCoffee, ProductCard, ProductTags } from "./styles";

export function ListProducts () {
  return (
    <ListProductsContainer>
      <h3>Nossos cafés</h3>
      <ListProductGrid>
        {coffees && coffees.map(coffee => (
          <ProductCard key={coffee.id}>
            <img src={coffee.imgSrc} alt="" />
            <ProductTags>
              {coffee.categories.map(category => (
                <span key={category}>{category}</span>
              ))}
            </ProductTags>
            <h4>{coffee.name}</h4>
            <span>{coffee.description}</span>
            <OrderCoffee>
              <strong><span>R$</span> {String(coffee.price.toFixed(2)).replace('.', ',')}</strong>
              <div>
                <div>
                  <button><Minus size={14} weight="bold" /></button>
                  <span>1</span>
                  <button><Plus size={14} weight="bold" /></button>
                </div>
                <button>{<ShoppingCart size={22} weight="fill" />}</button>
              </div>
            </OrderCoffee>
          </ProductCard>
        ))}
      </ListProductGrid>
    </ListProductsContainer>
  )
}