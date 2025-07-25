import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct, Products } from '../../services/products';
import { Telegram } from '../../services/telegram';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  template: `
    <div class="centered">
      <h2 class="mb">{{ product.title }}</h2>
      <br />
      <img [src]="product.image" [alt]="product.title" />
      <p>{{ product.text }}</p>
      <p>{{ product.price.toLocaleString('ru-RU') + ' руб.' }}</p>
      <!-- <a [href]="product.link" target="_blank">Посмотреть курс</a> -->
    </div>
  `,
})
export class Product implements OnInit, OnDestroy {
  product: IProduct;

  constructor(
    private products: Products,
    private telegram: Telegram,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.products.getById(Number(id));
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.telegram.BackButton.offClick(this.goBack);
  }
  ngOnInit(): void {
    this.telegram.BackButton.show();
    this.telegram.BackButton.onClick(this.goBack);
  }
}
