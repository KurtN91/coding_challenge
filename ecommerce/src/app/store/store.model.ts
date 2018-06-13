import {url} from '@angular-devkit/schematics';
//create class to hold JSON data
export class item {
    product_id: number;
    product_name: string;
    product_category: string;
    image: URL;
    price: number;
    color: string;
    description: string;
}