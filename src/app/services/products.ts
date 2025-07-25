import { Injectable } from '@angular/core';

const domain = 'https://result.shcool'

export enum ProductType {
  Fairy = 'fairy',
  Toy = 'toy',
}

export type IProduct = {
  id: number;
  title: string;
  link: string;
  image: string;
  text: string;
  price: number
  type: string
};

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    image:
      // domain +
      product.image,
    link:
      // domain +
      product.link
  }
}

const products: IProduct[] = [
  {
    id: 1,
    title: 'Красная шапочка',
    link: '/products/redhat',
    image:
      'https://sun9-48.userapi.com/s/v1/if1/Th_xqDQMCILLCxtHwq8lEbuUuUiWAGwMNxhcGvHqFvYUuj23SxPnC2L4Woc1nvl6EEF6iVgR.jpg?quality=96&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,371x278&from=bu',
    text: 'Сказка о том, как девочка несла пирожки своей бабушке и ее чуть не сьел волк.',
    price: 10000,
    type: ProductType.Fairy,
  },
  {
    id: 2,
    title: 'Лего машинка',
    link: '/products/legocar',
    image: 'https://lekub.ru/files/upload/image/71011_all.jpg',
    text: 'Интересная машинка лего',
    price: 10000,
    type: ProductType.Toy,
  },
];


@Injectable({
  providedIn: 'root',
})
export class Products {
  readonly products: IProduct[] = products.map(addDomainToLinkAndImage);

  getById(id: number) {
    return this.products.find((p)=> p.id === id)
  }

  get byGroup() {
    return this.products.reduce((group, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = []
      }
      group[prod.type].push(prod)
      return group
    },{})
  }
}
