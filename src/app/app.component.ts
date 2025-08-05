import { Component } from '@angular/core';
// @ts-ignore
import { Product } from './models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, FooterComponent, MainComponent]
})
export class AppComponent {
  title(title: any) {
      throw new Error("Method not implemented.");
  }
  products: Product[] = [
    {
      name: 'Áo Nam Papka 1079 be',
      brand: 'PAPKA Fashion',
      image: 	`https://product.hstatic.net/1000235488/product/1079_be_7eb0884621924936925f52cc87c7f2f3_large.png`,
      price: '249,000đ',
      oldPrice: '449,000đ',
      discount: '-45%'
    },
    {
      name: 'Áo Nam Papka 1079 rêu',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/1079_reu_5bfb30bc38f7410e8f897b29030d18be_large.png',
      price: '219,000đ',
      oldPrice: '399,000đ',
      discount: '-40%'
    },
    {
      name: 'Áo Polo Papka 1080 xanh',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/1079_xanh_bien_6680ecb7b40b4bbda0a889fc8963cba8_large.png',
      price: '249,000đ',
      oldPrice: '379,000đ',
      discount: '-47%'
    }
  ];

  cart: Product[] = [];

  constructor(private dialog: MatDialog) {}

  addToCart(product: Product) {
    this.cart.push(product);
    console.log('Đã thêm vào giỏ hàng:', product);
  }

  openCartDialog() {
    this.dialog.open(DialogComponent, {
      data: this.cart,
      width: '100px',
      height: '200px',
    });
  }
}






