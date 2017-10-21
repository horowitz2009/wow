import { JsonProperty } from 'json-typescript-mapper';

export class Product {

    id: number;
    name: string;

    @JsonProperty( 'category_id' )
    categoryId: number;


    shortDescription: string;
    longDescription: string;

    images: string[];

    price: number;
    currency: string;
    discount: number;

    published: boolean;
    published2: boolean;
    
    additionalAttributes: any;
    createdOn: string;
}

export class Attributes {
    a: string;
}
