import expressoTradicional from  '../../assets/coffees/expresso.png'
import americano from  '../../assets/coffees/americano.png'
import arabe from  '../../assets/coffees/arabe.png'
import cafeComLeite from  '../../assets/coffees/cafe-com-leite.png'
import cafeGelado from  '../../assets/coffees/cafe-gelado.png'
import capuccino from  '../../assets/coffees/capuccino.png'
import chocolateQuente from  '../../assets/coffees/chocolate-quente.png'
import cubano from  '../../assets/coffees/cubano.png'
import expressoCremoso from  '../../assets/coffees/expresso-cremoso.png'
import havaiano from  '../../assets/coffees/havaiano.png'
import irlandes from  '../../assets/coffees/irlandes.png'
import macchiato from  '../../assets/coffees/macchiato.png'
import latte from  '../../assets/coffees/latte.png'
import mochaccino from  '../../assets/coffees/mochaccino.png'

export const coffees = [
  {
    id: 1,
    categories: ["Tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    imgSrc: expressoTradicional
  },
  {
    id: 2,
    categories: ["Tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    imgSrc: americano
  },
  {
    id: 3,
    categories: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    imgSrc: expressoCremoso
  },
  {
    id: 4,
    categories: ["Tradicional", "Gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    imgSrc: cafeGelado
  },
  {
    id: 5,
    categories: ["Tradicional", "Com leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    imgSrc: cafeComLeite
  },
  {
    id: 6,
    categories: ["Tradicional", "Com leite"],
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    imgSrc: latte
  },
  {
    id: 7,
    categories: ["Tradicional", "Com leite"],
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    imgSrc: capuccino
  },
  {
    id: 8,
    categories: ["Tradicional", "Com leite"],
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    imgSrc: macchiato
  },
  {
    id: 9,
    categories: ["Tradicional", "Com leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    imgSrc: mochaccino
  },
  {
    id: 10,
    categories: ["Especial", "Com leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    imgSrc: chocolateQuente
  },
  {
    id: 11,
    categories: ["Especial", "Alcoólico", "Gelado"],
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    imgSrc: cubano
  },
  {
    id: 12,
    categories: ["Especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    imgSrc: havaiano
  },
  {
    id: 13,
    categories: ["Especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    imgSrc: arabe
  },
  {
    id: 14,
    categories: ["Especial", "Alcoólico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    imgSrc: irlandes
  },
]