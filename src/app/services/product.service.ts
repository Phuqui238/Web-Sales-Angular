
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Áo Nam Papka 1079 be',
      brand: 'PAPKA Fashion',
      image: `https://product.hstatic.net/1000235488/product/1079_be_7eb0884621924936925f52cc87c7f2f3_large.png`,
      price: '249,000đ',
      oldPrice: '449,000đ',
      discount: '-45%',
      quantity: 0
    },
    {
      id: 2,
      name: 'Áo Nam Papka 1079 rêu',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/1079_reu_5bfb30bc38f7410e8f897b29030d18be_large.png',
      price: '219,000đ',
      oldPrice: '399,000đ',
      discount: '-40%',
      quantity: 0
    },
    {
      id: 3,
      name: 'Áo Polo Papka 1080 xanh',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/1079_xanh_bien_6680ecb7b40b4bbda0a889fc8963cba8_large.png',
      price: '249,000đ',
      oldPrice: '379,000đ',
      discount: '-47%',
      quantity: 0
    },
    {
      id: 4,
      name: 'Áo Polo Papka 1080 trắng',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/z6748473055672_43c502512a140f85e43c1c877264456a_fbfb620225f444f5820edfc70c233f21_large.jpg',
      price: '249,000đ',
      oldPrice: '379,000đ',
      discount: '-47%',
      quantity: 0
    }
  ];

  cart: Product[] = [];

  constructor(private dialog: MatDialog) {}

  addToCart(product: Product) {
    const existing = this.cart.find(p => p.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    console.log('Đã thêm vào giỏ hàng:', product);
  }
  getCart(): Product[] {
    return this.cart;
  }

  openCartDialog() {
    this.dialog.open(DialogComponent, {
      data: this.cart,
      width: '100px',
      height: '200px',
    });
  }
  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
