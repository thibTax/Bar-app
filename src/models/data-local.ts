import Dish from './dish';
   
export const DISH: Dish[] = [
 { 
  id: 1,
  name: "Bière",
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  categorie: ["Apéro"],
  color : 'blue',
  price : 14,
  created: new Date()
 },
 { 
    id: 2,
    name: "Vin",
    picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
    categorie: ["Apéro"],
    color : 'red',
    price : 15,
    created: new Date()
   },
   { 
    id: 3,
    name: "Whisky",
    picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
    categorie: ["Apéro", "Spiritueu"],
    color : 'brown',
    price : 11,
    created: new Date()
   },
   {
   id: 4,
   name: "Café",
   picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
   categorie: ["Matin", "dessert"],
   color : 'black',
   price : 13,
   created: new Date()
  },
];
  
export default DISH;