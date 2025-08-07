import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  standalone: true,
  imports: [
    MatButton
  ]
})
export class DetailComponent implements OnInit {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    const found = this.productService.getProductById(id);
    if (found) {
      this.product = found;
    } else {
      console.warn('Không tìm thấy sản phẩm với id:', id);
    }
  }
  onAddToCart() {
    if (this.product) {
      this.productService.addToCart(this.product);
    }
  }
}
