import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import {
  MatCard,
} from '@angular/material/card';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {CurrencyPipe} from '@angular/common';
import {MatDivider} from '@angular/material/divider';
import {HeaderComponent} from '../../component/header/header.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [
    MatCard,
    MatIconButton,
    MatIcon,
    CurrencyPipe,
    MatDivider,
    MatButton,
  ]
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cartItems = this.productService.getCart();
  }

  increaseQuantity(product: Product) {
    product.quantity++;
  }

  decreaseQuantity(product: Product) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  getProductTotal(product: Product): number {
    return this.convertPrice(product.price) * product.quantity;
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + this.getProductTotal(item), 0);
  }

  convertPrice(price: string): number {
    return Number(price.replace(/[^\d]/g, ''));
  }
}
