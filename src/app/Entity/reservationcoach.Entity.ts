import { Client } from "./client.Entity";
import { Coach } from "./coach.Entity";

export class ReservationCoach{
    constructor(
        public id?:number,
        public client?:Client,
        public coach?:Coach){}
    }