import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = [
      { 
        id: 11, name: 'Product1', categoryId: 1, shortDescription: "This is product desc", 
        longDescription: "Long description goes here. It can be long and I hope it also has to support HTML", 
        price: 12.90, currency: "лв", discount: 0.0, published: true, images: ["assets/e_white.jpg", "assets/g_pack45.jpg"] 
      },
      { 
        id: 12, name: 'Product2', categoryId: 1, shortDescription: "This is product desc", 
        longDescription: "Long description goes here. It can be long and I hope it also has to support HTML", 
        price: 7.99, currency: "лв", discount: 0.0, published: true, images: ["assets/en-pack-blue2.jpg", "assets/g_pack45.jpg"] 
      },
      { 
        id: 13, name: 'Product3', categoryId: 1, shortDescription: "This is product desc", 
        longDescription: "Long description goes here. It can be long and I hope it also has to support HTML", 
        price: 8, currency: "лв", discount: 0.0, published: true, images: ["assets/en-pack-green2.jpg", "assets/g_pack45.jpg"] 
      },
      { 
        id: 14, name: 'Product4', categoryId: 2, shortDescription: "This is product desc", 
        longDescription: "Long description goes here. It can be long and I hope it also has to support HTML", 
        price: 12, currency: "лв", discount: 5.0, published: true, images: ["assets/en-pack-pink2.jpg", "assets/g_pack45.jpg"] 
      },
      { 
        id: 15, name: 'Product5', categoryId: 2, shortDescription: "This is product desc", 
        longDescription: "Long description goes here. It can be long and I hope it also has to support HTML", 
        price: 22, currency: "лв", discount: 5.0, published: true, images: ["assets/en-pack-red2.jpg", "assets/g_pack45.jpg"] 
      },
      { 
        id: 16, name: 'Product5', categoryId: 2, shortDescription: "This is product desc", 
        longDescription: "Long description goes here. It can be long and I hope it also has to support HTML", 
        price: 22, currency: "лв", discount: 5.0, published: true, images: ["assets/en-pack-violet2.jpg", "assets/g_pack45.jpg"] 
      },
      { 
        id: 17, name: 'Product5', categoryId: 2, shortDescription: "This is product desc", 
        longDescription: "Long description goes here. It can be long and I hope it also has to support HTML", 
        price: 22, currency: "лв", discount: 5.0, published: true, images: ["assets/en-pack-yellow2.jpg", "assets/g_pack45.jpg"] 
      }
    ];
    return { products };
  }
}
/*

  id: number;
  name: string;
  categoryId: number;
  
  
  shortDescription: string;
  longDescription: string;

  images: string[];

  price: number;
  currency: string;
  discount: number;

  published: boolean;
  
*/
