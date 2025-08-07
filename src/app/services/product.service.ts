
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../component/dialog/dialog.component';

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
      name: 'Áo Polo Papka 1080 xám',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/1079_xam_nhat_74051f1442c74151b24af7cb1e072515_large.png',
      price: '249,000đ',
      oldPrice: '379,000đ',
      discount: '-47%',
      quantity: 0
    },
    {
      id: 5,
      name: 'Áo Polo Papka 1080 vàng',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/z6748474602755_f08927af7611b0fa963ecf38dd685e19_22386ce635a542d390d8af2571a109a7_large.jpg',
      price: '249,000đ',
      oldPrice: '379,000đ',
      discount: '-47%',
      quantity: 0
    },
    {
      id: 6,
      name: 'Áo Nam Papka 1081 xanh bơ',
      brand: 'PAPKA Fashion',
      image: `https://product.hstatic.net/1000235488/product/z6748475684818_b22f68f9bc5c1bfb05cb536ee3c821d3_0a643fb6c698464b998f2553b24b03fd_large.jpg`,
      price: '249,000đ',
      oldPrice: '449,000đ',
      discount: '-45%',
      quantity: 0
    },
    {
      id: 7,
      name: 'Áo Nam Papka 1081 xanh olive',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/z6748474859217_d9c769102d4ac90ab1e8b7d01a0c31c2_6c117158f99d4dbaab47383106e3c352_large.jpg',
      price: '249,000đ',
      oldPrice: '449,000đ',
      discount: '-45%',
      quantity: 0
    },
    {
      id: 8,
      name: 'Áo Nam Papka 1081 xanh biển',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/z6748475167930_238a6d454449d179d54e55b8e63e8680_76e6cd2efd5f4d7388064c95ed781932_large.jpg',
      price: '249,000đ',
      oldPrice: '449,000đ',
      discount: '-45%',
      quantity: 0
    },
    {
      id: 9,
      name: 'Áo Nam Papka 1081 xanh đậm',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/1115_7_e61d7afa57664346be233ed95d23dadd_large.png',
      price: '349,000đ',
      oldPrice: '649,000đ',
      discount: '-39%',
      quantity: 0
    },
    {
      id: 10,
      name: 'Áo Nam Papka 1081 trắng',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/z6748473055672_43c502512a140f85e43c1c877264456a_fbfb620225f444f5820edfc70c233f21_large.jpg',
      price: '249,000đ',
      oldPrice: '449,000đ',
      discount: '-45%',
      quantity: 0
    },
    {
      id: 11,
      name: 'Áo Nam Papka 1081 xanh nhạt',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/1115_3_1df2ce29a14542c1b864fd24da4186eb_large.png',
      price: '349,000đ',
      oldPrice: '649,000đ',
      discount: '-39%',
      quantity: 0
    },
    {
      id: 12,
      name: 'Áo Nam Papka 1081 kem',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/1115_6_94b36b013f304f9f845b77d5883e3831_large.png',
      price: '349,000đ',
      oldPrice: '649,000đ',
      discount: '-39%',
      quantity: 0
    },
    {
      id: 13,
      name: 'Áo Nam Papka 1081 xanh đen',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/1079_xanh_den_81331951b8d0476b87931ae90ae40849_large.png',
      price: '249,000đ',
      oldPrice: '449,000đ',
      discount: '-45%',
      quantity: 0
    },
    {
      id: 14,
      name: 'Áo Nam Papka 1081 hồng',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/z6748475426849_59afe46c3a69953c899dd5bbb79118cc_35904caa9f644a21a2290e3ea22830bf_large.jpg',
      price: '249,000đ',
      oldPrice: '449,000đ',
      discount: '-45%',
      quantity: 0
    },
    {
      id: 15,
      name: 'Áo Nam Papka 1081 cam',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/1103_cam_f91eecb8dcc741ec8e3a98c3a66a9f77_large.png',
      price: '349,000đ',
      oldPrice: '649,000đ',
      discount: '-39%',
      quantity: 0
    },
    {
      id: 16,
      name: 'Áo Nam Papka 1081 đỏ đô',
      brand: 'PAPKA Fashion',
      image: 'https://product.hstatic.net/1000235488/product/1076_d__d__6b8d9ef124ed464ab39236bde7c61798_large.png',
      price: '349,000đ',
      oldPrice: '649,000đ',
      discount: '-39%',
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
