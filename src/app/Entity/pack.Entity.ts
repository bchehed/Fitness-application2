import { Categorie } from "./categorie.Entity";
import { Salle,  } from "./Salle.Entity";


export class Pack {
    constructor (
        public id?: number,
        public nom?: string,
        
        public prix?: string,
        public image?: string,
        public description?: string,
        public categrie?: Categorie,
        public salle?: Salle,
    ){}
}