
import { productcontracts } from "../contracts/product-contracts";

export abstract class Producttemplates implements productcontracts{

     public Name: string = '';
     public Price: number = 0;
     public Qty: number =0;
     abstract Total(): number;
     abstract  Print(): void;
}