import { Coach } from "./coach.Entity";

export class Planing {
    constructor (
        public id?: number,
        public nom?: string,
        public duree?: string,
        public date?: string,
        public prix?:String,
        public emplacement?: String,
        public description?: string,
        public coach?: Coach,
       
    ){}
}