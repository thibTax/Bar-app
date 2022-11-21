export default class Dish {
    // 1. Typage des propiétés d'un plat.
    id: number;
    name: string;
    picture: string;
    categorie: Array<string>;
    color:string;
    price : number;
    created: Date;
     
    // 2. Définition des valeurs par défaut des propriétés d'un plat.
    constructor(
     id: number,
     name: string = 'name',
     picture: string = 'http://...',
     categorie: Array<string> = ['Normal'],
     color:string,
     price : number,
     created: Date = new Date()
    ) {
     // 3. Initialisation des propiétés d'un plat.
     this.id = id;
     this.name = name;
     this.picture = picture;
     this.categorie = categorie;
     this.color = color;
     this.price =price;
     this.created = created;
    }
   }