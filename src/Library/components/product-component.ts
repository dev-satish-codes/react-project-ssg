

import { Producttemplates } from "../templates/product-templates";

export class Productcomponent  extends Producttemplates {

    Name = 'samsung TV';
    Price = 45000.33;
    Qty = 2;
   
    Total() {
        return this.Qty * this.Price;
    }
    Print() {
        console.log(`Name= ${this.Name}\n Price=${this.Price}\n Qty =${this.Qty}\n Total=${this.Total()}`);
        
    }
}