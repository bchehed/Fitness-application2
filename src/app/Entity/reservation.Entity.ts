import { Client } from "./client.Entity";
import { Pack } from "./pack.Entity";

export class Reservation{
    constructor(
        public id?:number,
        public client?:Client,
        public pack?:Pack,
    
    ){}
}