import { Routes } from '@angular/router';
import { Shop } from './pages/shop/shop';
import { Feedback } from './pages/feedback/feedback';
import { Product } from './pages/product/product';

export const routes: Routes = [
    { path: '', component: Shop, pathMatch: 'full' },
    { path: 'feedback', component: Feedback },
    { path: 'product/:id', component: Product}
];
