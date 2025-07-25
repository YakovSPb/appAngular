import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Telegram } from '../../services/telegram';
import { Product } from '../product/product';
import { Products } from '../../services/products';
import { ProductList } from '../../components/product-list/product-list';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductList],
  template: `
    <app-product-list
      title="Мир Чудесных Сказок"
      subtitle="Окунитесь в волшебные истории, где оживают мечты!"
      [products]="products.byGroup['fairy']"
    />
    <app-product-list
      title="Царство Веселых Игрушек"
      subtitle="Где каждая игра - новое приключение!"
      [products]="products.byGroup['toy']"
    />
  `,
})
export class Shop {
  telegram = inject(Telegram);
  products = inject(Products);

  constructor() {
    this.telegram.BackButton.hide()
  }
}
